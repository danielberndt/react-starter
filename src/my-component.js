import React from 'react';
import ReactDOM from 'react-dom';
import HTML5Backend, { NativeTypes } from 'react-dnd-html5-backend';
import { DropTarget as dropTarget, DragDropContext as dragDropContext } from 'react-dnd';

const fileTarget = {
  drop(props, monitor) {
    console.log('dropped', monitor.getItem().files);
  },
};

@dragDropContext(HTML5Backend)
@dropTarget(NativeTypes.FILE, fileTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
}))
export default class MyComponent extends React.Component {

  static propTypes = {
    connectDropTarget: React.PropTypes.func.isRequired,
    isOver: React.PropTypes.bool.isRequired,
    canDrop: React.PropTypes.bool.isRequired,
  };

  render() {
    const { connectDropTarget, isOver, canDrop } = this.props;
    return (
      <div ref={n => connectDropTarget(ReactDOM.findDOMNode(n))}>
        <div>Hover here. {isOver ? <b>is over</b> : null} {canDrop ? <b>canDrop</b> : null}</div>
      </div>
    );
  }
}
