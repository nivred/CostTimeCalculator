import React, { Component } from 'react';

class Calculator extends Component {

    static defaultProps = {
        times: ['Minutes', 'Hours']
    }
    render() {
        let timeOptions = this.props.times.map(time => {
            return <option key={time} value="time">{time}</option>
        });
        return (
            <div className="Calculator">

                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-5" id="calculator">

                            <h1 className="text-center">Cost/Time Calculator</h1>

                            <form>
                                <div className="form-group">
                                    <label className="text-right">Work Type</label>
                                    <select name="workType" id="work-type" className="p-1">
                                        <option value="minutes">Development ($160/hour)</option>
                                        <option value="hours">Design ($120/hour)</option>
                                        <option value="hours">Project Management ($120/hour)</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Time</label>
                                    <input type="text" name="time" id="time" className="px-1" />
                                    <select name="minHr" id="min-hr" className="ml-2 p-1">
                                        {timeOptions}
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Cost</label>
                                    <input type="text" name="cost" id="cost" className="px-1" placeholder="$" />
                                </div>
                                <button className="btn btn-block">Round up to nearest 15 minute</button>
                                <button className="btn btn-block">Round down to nearest 15 minuites</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
                
export default Calculator;
