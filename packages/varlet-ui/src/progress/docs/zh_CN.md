# Progress 进度条

### 介绍

展示操作的当前进度

### 引入

```js
import { Progress } from '@varlet/ui'

export default defineComponent({
	components: {
		[Progress.name]: Progress,
	},
})
```

## 线性进度条

### 基本使用

使用 `value` 属性设置当前进度

```html
<var-progress :value="20" /> <var-progress :value="value" />
```

### 不同样式

可以适用 `line-width` 属性设置线宽、`color` 属性设置进度条颜色、 `track-color` 属性设置轨道颜色、 `ripple` 属性设置水波纹加载效果

```html
<var-progress :value="30" line-width="8" />
<var-progress
	:value="60"
	line-width="10"
	color="purple"
	track-color="#dec3e6"
/>
<var-progress :value="80" line-width="10" ripple />
```

### 显示标签

使用 `show-action` 显示 action，action 默认为进度的百分比，可以使用插槽插入自定义内容

```html
<var-progress :value="30" show-action />
<var-progress :value="value" show-action />
<var-progress :value="100" show-action> success </var-progress>
```

### 自定义样式

传入`style`属性自定义控制样式

```html
<var-progress :value="30" line-width="10" style="border-radius: 4px" />
<var-progress :value="60" show-action style="color: #72c140" />
```

## 环形进度条

### 不同尺寸

通过`size`属性改变大小

```html
<var-progress :value="30" line-width="3" mode="circle" />
<var-progress :value="50" line-width="3" size="56" mode="circle" />
<var-progress :value="70" line-width="3" size="72" mode="circle" />
```

### 不同样式

同样使用 `line-width` 属性设置线宽、`color` 属性设置进度条颜色、 `track-color` 属性设置轨道颜色

```html
<var-progress :value="30" line-width="8" />
<var-progress
	:value="60"
	line-width="10"
	color="purple"
	track-color="#dec3e6"
/>
<var-progress :value="80" line-width="10" ripple />
```

### 显示标签

同样使用 `show-action` 显示 action，action 默认为进度的百分比，可以使用插槽插入自定义内容

```html
<var-progress :value="30" line-width="5" size="56" mode="circle" show-action />
<var-progress
	:value="value"
	line-width="5"
	size="56"
	mode="circle"
	show-action
/>
<var-progress :value="100" line-width="5" size="56" mode="circle" show-action>
	success
</var-progress>
```

### 不同原点

使用 `rotate` 改变环形进度条的原点

```html
<var-progress :value="value" line-width="5" size="56" mode="circle" />
<var-progress
	:value="value"
	line-width="5"
	size="56"
	mode="circle"
	:rotate="90"
/>
<var-progress
	:value="value"
	line-width="5"
	size="56"
	mode="circle"
	:rotate="180"
/>
```

### 隐藏轨道

使用 `show-track` 隐藏轨道

```html
<var-progress :value="30" line-width="3" mode="circle" :show-track="false" />
<var-progress
	:value="50"
	line-width="5"
	size="56"
	mode="circle"
	:show-track="false"
	show-action
/>
<var-progress
	:value="value"
	line-width="8"
	size="72"
	mode="circle"
	:show-track="false"
	show-action
	:rotate="90"
/>
```

## API

### 属性

| 参数 | 说明            | 类型     | 默认值   |
| ---- | --------------- | -------- | -------- |
| mode | progress 的模式 | _string_ | `linear` |

### 线性进度条

| 参数        | 说明                | 类型                 | 默认值    |
| ----------- | ------------------- | -------------------- | --------- |
| value       | progress 的进度     | _number_             | `0`       |
| lineWidth   | progress 的线宽     | _number_ ｜ _string_ | `4`       |
| color       | progress 的颜色     | _string_             | `#005CAF` |
| trackColor  | progress 轨道的颜色 | _string_             | `#afd9ff` |
| ripple      | 水波纹加载效果      | _boolean_            | `false`   |
| show-action | 是否显示 action     | _boolean_            | `false`   |

### 环形进度条

**_注：环形进度条不支持`ripple`属性_**
| 参数 | 说明 | 类型 | 默认值 |
| ----- | --------------------------------------------------------- | -------- | -------------- |
| value | progress 的进度 | _number_ | `0` |
| lineWidth | progress 的线宽 | _number_ ｜ _string_ | `4` |
| color | progress 的颜色 | _string_ | `#005CAF` |
| trackColor | progress 轨道的颜色 | _string_ | `#afd9ff` |
| show-action | 是否显示 action | _boolean_ | `false` |
| size | progress 的尺寸 | _number_ | `40` |
| rotate | progress 的原点 | _number_ | `0` |
| show-track | 是否显示 progress 的轨道 | _boolean_ | `true` |