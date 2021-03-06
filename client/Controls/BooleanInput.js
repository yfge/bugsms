import { Select } from 'antd'
import Com2Server from './../utils'

const Option = Select.Option
/**
 * 选择输入框值
 * 可以从服务器获取指定字典的定义
 * @author 老拐 <geyunfei@kakamf.com>
 * @date Nov 12nd, 2017
 * 搞定初始版本
 */
export default class BooleanInput extends Com2Server {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
    }
    this.onSelectChange = this.onSelectChange.bind(this)
  }
  onSelectChange(value) {
    let cb = this.props.onChange
    cb && typeof cb === 'function' && cb(
      {
        target: {
          name: this.props.name,
          value: value,
        },
      },
    )
  }
  renderChild() {
    return (
      <Select style={{ width: 161 }} key={this.props.key} name={this.props.name} onChange={this.onSelectChange} >
        <Option key={-1} value={undefined} />
        <Option key={1} value={1}>是</Option>
        <Option key={0} value={0}>否</Option>
      </Select>
    )

  }

}
