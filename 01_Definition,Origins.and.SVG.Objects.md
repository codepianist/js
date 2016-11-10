# D3

## Definition
- Means- Data Driven Documents
- HTML5, CSS3

## Origins
- Protoviz (2005) 
- D3.js (2011)

## SVG Objects
- XML based vector image
- Came with HTML5 to draw shapes. Can use to render an image
- Raster vs. Vector

| Raster | Vector |
|------------------------|--------------------------------------------------|
| .jpeg,.gif,.png | .svg |
| Pre-defined resolution | Can scale |
| Don't scales, distorts | It scales, renders accordingly to the resolution |

### Scalable Vector Graphics
- Shape
- + Filter (Adds special effects)
- + Gradients

[http://www.w3schools.com/graphics/svg_intro.asp]

### Example
```html
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>
```

```javascript
d3
  .select("body")
  .append("svg").attr("width",50).attr("height",200)
  .append("rect").style("fill","blue");
```

### Coordinate System
- Starts at top left:   0,0 -> n,0
- Ends at bottom right: 0,n -> n,n
- Use X and Y Axis concepts

