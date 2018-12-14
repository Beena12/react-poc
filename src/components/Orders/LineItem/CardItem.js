import React from 'react';
import { Button } from "reactstrap";

export default function CardItem( props ) {
    return (
        <div className="card-item">
            <div className="card-item-header">
                <span className="item-name">Item1</span>
                <div className="buttons-wrap float-right">
                    <Button 
                        color="secondary"
                        size="sm"
                        className="item-button"
                        onClick = { props.onDeleteClick }
                    >
                        <i className="fa fa-remove"></i>
                    </Button>
                    <Button 
                        color="primary"
                        size="sm"
                        className="item-button"
                        onClick = { props.onEditClick }
                    >
                        <i className="fa fa-edit"></i>
                    </Button>
                </div>
            </div>
            <div className="card-item-body">
                
            </div>
        </div>
    );
}