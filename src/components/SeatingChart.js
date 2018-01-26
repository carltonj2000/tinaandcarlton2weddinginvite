import React, { Component } from "react";
import people from "../utils/people";

class SeatingChart extends Component {
  getSeatingSetup() {
    const table = { size: { x: 30, y: 20 } };
    const chairArea = { x: 20, y: 20 };
    const requiredTables = people.length; // 2 people/1-row per table
    const seatingArea = {
      size: {
        x: table.size.x + 4 * chairArea.x + 600, // +600 4 name, relation, food
        y: table.size.y * (requiredTables + 2) // +2 for space on either end
      }
    };
    const tables = {
      required: requiredTables,
      size: {
        x: table.size.x,
        y: table.size.y * requiredTables
      },
      location: {
        x: (seatingArea.size.x - table.size.x) / 2,
        y: table.size.y
      }
    };
    let chairs = [];
    const chairSpace = 2;
    // drawn chair size smaller the chair area i.e. margin
    let chair = {
      size: { x: chairArea.x - chairSpace, y: chairArea.y - chairSpace }
    };
    const row1x = seatingArea.size.x / 2 - table.size.x / 2 - chairArea.x * 1.5;
    const row2x =
      seatingArea.size.x / 2 +
      table.size.x / 2 +
      chairArea.x * 0.5 +
      chairSpace;
    let chairY = table.size.y + chairSpace;
    // y is aproximated based on font size and x based on looks
    const textOffset = { x: chairArea.x / 4, y: chairArea.y / 4 };
    for (var i = 0; i < requiredTables; i++) {
      const text = { location: { y: chairY + chairArea.y - textOffset.y } };
      chairs.push({
        location: { x: row1x, y: chairY },
        ...chair,
        ...people[i][0],
        text: {
          location: { x: row1x - textOffset.x, y: text.location.y },
          anchor: "end"
        }
      });
      chairs.push({
        location: { x: row2x, y: chairY },
        ...chair,
        ...people[i][1],
        text: {
          location: {
            x: row2x + chairArea.x + textOffset.x,
            y: text.location.y
          },
          anchor: "start"
        }
      });
      chairY += chairArea.y;
    }
    return { seatingArea, tables, chairs };
  }
  state = {
    width: 0,
    height: 0,
    meal: "",
    name: ""
  };
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  render() {
    //const { width, height, name } = this.state;
    const { seatingArea, tables, chairs } = this.getSeatingSetup();
    return (
      <div className="container">
        <svg
          width={seatingArea.size.x}
          height={seatingArea.size.y}
          viewBox={`0 0 ${seatingArea.size.x} ${seatingArea.size.y}`}
        >
          <rect
            width={tables.size.x}
            height={tables.size.y}
            x={tables.location.x}
            y={tables.location.y}
            style={{ fill: "green" }}
          />
          {chairs.map(chair => {
            return (
              <g key={`${chair.location.x}_${chair.location.y}`}>
                <rect
                  width={chair.size.x}
                  height={chair.size.y}
                  x={chair.location.x}
                  y={chair.location.y}
                  style={{ fill: "darkgoldenrod" }}
                  onMouseOver={() =>
                    this.setState({ name: chair.name, meal: chair.meal })
                  }
                  onMouseOut={() => this.setState({ name: "", meal: "" })}
                />
                <text
                  x={chair.text.location.x}
                  y={chair.text.location.y}
                  textAnchor={`${chair.text.anchor}`}
                  onMouseOver={() =>
                    this.setState({ name: chair.name, meal: chair.meal })
                  }
                  onMouseOut={() => this.setState({ name: "", meal: "" })}
                >
                  {this.state.meal &&
                    this.state.name === chair.name &&
                    chair.text.anchor === "end" &&
                    `${this.state.meal} - ${chair.relation} - `}
                  {chair.name}
                  {this.state.meal &&
                    this.state.name === chair.name &&
                    chair.text.anchor === "start" &&
                    ` - ${chair.relation} - ${this.state.meal}`}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    );
  }
}
export default SeatingChart;
