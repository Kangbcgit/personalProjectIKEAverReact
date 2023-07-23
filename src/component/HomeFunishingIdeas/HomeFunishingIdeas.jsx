import React, { Component } from 'react'
import styles from './HomeFunishingIdeas.module.scss'
import CreateItem from './createItem';

class HomeFunishingIdeas extends Component {
  constructor(props) {
    super(props);
    this.state = {
       items: [],
       position: []
    }
  }
  componentDidMount () {
    const newItems = [],
          newPosition = [];
    for (let i = 1; i <= 12; i++) {
      newItems.push({
        src: `./img/home/home${i}.jpg`
      });
    }
    newPosition.push({top: 28, left: 74})
    newPosition.push({top: 63, left: 33})
    newPosition.push({top: 35, left: 72})
    newPosition.push({top: 47, left: 53})
    newPosition.push({top: 33, left: 57})
    newPosition.push({top: 43, left: 81})
    newPosition.push({top: 67, left: 74})
    newPosition.push({top: 23, left: 32})
    newPosition.push({top: 35, left: 24})
    newPosition.push({top: 47, left: 48})
    newPosition.push({top: 16, left: 38})
    newPosition.push({top: 86, left: 55})
    this.setState({items: newItems, position: newPosition})
  }

  renderItem () {
    return this.state.items.map((item, index) => (
      <CreateItem key={index} src={item.src} item={styles.item} active={styles.active} spotInfo={styles.spotInfo} top={this.state.position[index].top} left={this.state.position[index].left}/>
    ));
  }
  render () {
    return (
      <section className={styles.homeFunishingIdeas}> 
        <h2>Home Funishing Ideas</h2>
        <div className={styles.wrapIdeas}>
          {this.renderItem()}
          <div className={styles.moreButton}>더 보기</div>
        </div>
      </section>
    );
  }
}

export default HomeFunishingIdeas;
