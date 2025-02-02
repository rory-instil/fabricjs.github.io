---
editUrl: false
next: false
prev: false
title: "Polygon"
---

Root object class from which all 2d shape classes inherit from

## Tutorial

[http://fabricjs.com/fabric-intro-part-1#objects](http://fabricjs.com/fabric-intro-part-1#objects)

## Fires

added

## Fires

removed

## Fires

selected

## Fires

deselected

## Fires

rotating

## Fires

scaling

## Fires

moving

## Fires

skewing

## Fires

modified

## Fires

mousedown

## Fires

mouseup

## Fires

mouseover

## Fires

mouseout

## Fires

mousewheel

## Fires

mousedblclick

## Fires

dragover

## Fires

dragenter

## Fires

dragleave

## Fires

drop

## Extends

- [`Polyline`](/api/classes/polyline/)

## Constructors

### new Polygon()

> **new Polygon**(`points`, `options`?): [`Polygon`](/api/classes/polygon/)

Constructor

#### Parameters

• **points**: [`XY`](/api/interfaces/xy/)[] = `[]`

Array of points (where each point is an object with x and y)

• **options?**: `Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\> = `...`

Options object

#### Returns

[`Polygon`](/api/classes/polygon/)

thisArg

#### Example

```ts
var poly = new Polyline([
    { x: 10, y: 10 },
    { x: 50, y: 30 },
    { x: 40, y: 70 },
    { x: 60, y: 50 },
    { x: 100, y: 150 },
    { x: 40, y: 100 }
  ], {
  stroke: 'red',
  left: 100,
  top: 100
});
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`constructor`](/api/classes/polyline/#constructors)

#### Defined in

[src/shapes/Polyline.ts:118](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Polyline.ts#L118)

## Properties

### \_\_corner?

> `optional` **\_\_corner**: `string`

keeps the value of the last hovered corner during mouse move.
0 is no corner, or 'mt', 'ml', 'mtr' etc..
It should be private, but there is no harm in using it as
a read-only property.
this isn't cleaned automatically. Non selected objects may have wrong values

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`__corner`](/api/classes/polyline/#__corner)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:105](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L105)

***

### \_controlsVisibility

> **\_controlsVisibility**: `Record`\<`string`, `boolean`\>

a map of control visibility for this object.
this was left when controls were introduced to not break the api too much
this takes priority over the generic control visibility

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`_controlsVisibility`](/api/classes/polyline/#_controlsvisibility)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:112](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L112)

***

### \_scaling?

> `optional` **\_scaling**: `boolean`

A boolean used from the gesture module to keep tracking of a scaling
action when there is no scaling transform in place.
This is an edge case and is used twice in all codebase.
Probably added to keep track of some performance issues

#### TODO

use git blame to investigate why it was added
DON'T USE IT. WE WILL TRY TO REMOVE IT

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`_scaling`](/api/classes/polyline/#_scaling)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:134](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L134)

***

### aCoords

> **aCoords**: [`TCornerPoint`](/api/type-aliases/tcornerpoint/)

Describe object's corner position in scene coordinates.
The coordinates are derived from the following:
left, top, width, height, scaleX, scaleY, skewX, skewY, angle, strokeWidth.
The coordinates do not depend on viewport changes.
The coordinates get updated with [setCoords](../../../../api/classes/polygon/#setcoords).
You can calculate them without updating with [()](../../../../api/classes/polygon/#calcacoords)

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`aCoords`](/api/classes/polyline/#acoords)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:63](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L63)

***

### absolutePositioned

> **absolutePositioned**: `boolean`

Meaningful ONLY when the object is used as clipPath.
if true, the clipPath will have its top and left relative to canvas, and will
not be influenced by the object transform. This will make the clipPath relative
to the canvas, but clipping just a particular object.
WARNING this is beta, this feature may change or be renamed.
since 2.4.0

#### Default

```ts
false
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`absolutePositioned`](/api/classes/polyline/#absolutepositioned)

#### Defined in

[src/shapes/Object/Object.ts:218](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L218)

***

### angle

> **angle**: [`TDegree`](/api/type-aliases/tdegree/)

Angle of rotation of an object (in degrees)

#### Default

```ts
0
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`angle`](/api/classes/polyline/#angle)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:581](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L581)

***

### backgroundColor

> **backgroundColor**: `string`

Background color of an object.
takes css colors https://www.w3.org/TR/css-color-3/

#### Default

```ts

```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`backgroundColor`](/api/classes/polyline/#backgroundcolor)

#### Defined in

[src/shapes/Object/Object.ts:205](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L205)

***

### borderColor

> **borderColor**: `string`

Color of controlling borders of an object (when it's active)

#### Default

```ts
rgb(178,204,255)
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`borderColor`](/api/classes/polyline/#bordercolor)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:74](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L74)

***

### borderDashArray

> **borderDashArray**: `null` \| `number`[]

Array specifying dash pattern of an object's borders (hasBorder must be true)

#### Since

1.6.2

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`borderDashArray`](/api/classes/polyline/#borderdasharray)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:75](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L75)

***

### borderOpacityWhenMoving

> **borderOpacityWhenMoving**: `number`

Opacity of object's controlling borders when object is active and moving

#### Default

```ts
0.4
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`borderOpacityWhenMoving`](/api/classes/polyline/#borderopacitywhenmoving)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:76](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L76)

***

### borderScaleFactor

> **borderScaleFactor**: `number`

Scale factor of object's controlling borders
bigger number will make a thicker border
border is 1, so this is basically a border thickness
since there is no way to change the border itself.

#### Default

```ts
1
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`borderScaleFactor`](/api/classes/polyline/#borderscalefactor)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:77](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L77)

***

### centeredRotation

> **centeredRotation**: `boolean`

When `true` the object will rotate on its center.
When `false` will rotate around the origin point defined by originX and originY.
The value of this property is IGNORED during a transform if the canvas has already
centeredRotation set to `true`
The object method `rotate` will always consider this property and never the canvas's one.

#### Since

1.3.4

#### Default

```ts

```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`centeredRotation`](/api/classes/polyline/#centeredrotation)

#### Defined in

[src/shapes/Object/Object.ts:219](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L219)

***

### centeredScaling

> **centeredScaling**: `boolean`

When true, this object will use center point as the origin of transformation
when being scaled via the controls.

#### Since

1.3.4

#### Default

```ts

```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`centeredScaling`](/api/classes/polyline/#centeredscaling)

#### Defined in

[src/shapes/Object/Object.ts:220](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L220)

***

### clipPath?

> `optional` **clipPath**: [`BaseFabricObject`](/api/classes/basefabricobject/)\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

a fabricObject that, without stroke define a clipping area with their shape. filled in black
the clipPath object gets used when the object has rendered, and the context is placed in the center
of the object cacheCanvas.
If you want 0,0 of a clipPath to align with an object center, use clipPath.originX/Y to 'center'

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`clipPath`](/api/classes/polyline/#clippath)

#### Defined in

[src/shapes/Object/Object.ts:216](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L216)

***

### clipPathId?

> `optional` **clipPathId**: `string`

When an object is being exported as SVG as a clippath, a reference inside the SVG is needed.
This reference is a UID in the fabric namespace and is temporary stored here.

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`clipPathId`](/api/classes/polyline/#clippathid)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:14](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/FabricObjectSVGExportMixin.ts#L14)

***

### controls

> **controls**: `TControlSet`

holds the controls for the object.
controls are added by default_controls.js

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`controls`](/api/classes/polyline/#controls)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:118](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L118)

***

### cornerColor

> **cornerColor**: `string`

Color of controlling corners of an object (when it's active)

#### Default

```ts
rgb(178,204,255)
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`cornerColor`](/api/classes/polyline/#cornercolor)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:68](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L68)

***

### cornerDashArray

> **cornerDashArray**: `null` \| `number`[]

Array specifying dash pattern of an object's control (hasBorder must be true)

#### Since

1.6.2

#### Default

```ts
null
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`cornerDashArray`](/api/classes/polyline/#cornerdasharray)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:71](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L71)

***

### cornerSize

> **cornerSize**: `number`

Size of object's controlling corners (in pixels)

#### Default

```ts
13
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`cornerSize`](/api/classes/polyline/#cornersize)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:65](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L65)

***

### cornerStrokeColor

> **cornerStrokeColor**: `string`

Color of controlling corners of an object (when it's active and transparentCorners false)

#### Since

1.6.2

#### Default

```ts
''
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`cornerStrokeColor`](/api/classes/polyline/#cornerstrokecolor)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:69](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L69)

***

### ~~cornerStyle~~

> **cornerStyle**: `"circle"` \| `"rect"`

Specify style of control, 'rect' or 'circle'
This is deprecated. In the future there will be a standard control render
And you can swap it with one of the alternative proposed with the control api

#### Since

1.6.2

#### Default

```ts
'rect'
```

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`cornerStyle`](/api/classes/polyline/#cornerstyle)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:70](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L70)

***

### dirty

> **dirty**: `boolean`

When set to `true`, object's cache will be rerendered next render call.
since 1.7.0

#### Default

```ts
true
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`dirty`](/api/classes/polyline/#dirty)

#### Defined in

[src/shapes/Object/Object.ts:245](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L245)

***

### evented

> **evented**: `boolean`

When set to `false`, an object can not be a target of events. All events propagate through it. Introduced in v1.3.4

#### Default

```ts

```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`evented`](/api/classes/polyline/#evented)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:82](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L82)

***

### ~~exactBoundingBox~~

> **exactBoundingBox**: `boolean`

WARNING: Feature in progress
Calculate the exact bounding box taking in account strokeWidth on acute angles
this will be turned to true by default on fabric 6.0
maybe will be left in as an optimization since calculations may be slow

#### Default

```ts
false
```

:::caution[Deprecated]
transient option soon to be removed in favor of a different design
:::

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`exactBoundingBox`](/api/classes/polyline/#exactboundingbox)

#### Defined in

[src/shapes/Polyline.ts:61](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Polyline.ts#L61)

***

### excludeFromExport

> **excludeFromExport**: `boolean`

When `true`, object is not exported in OBJECT/JSON

#### Since

1.6.3

#### Default

```ts

```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`excludeFromExport`](/api/classes/polyline/#excludefromexport)

#### Defined in

[src/shapes/Object/Object.ts:212](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L212)

***

### fill

> **fill**: `null` \| `string` \| [`TFiller`](/api/type-aliases/tfiller/)

Color of object's fill
takes css colors https://www.w3.org/TR/css-color-3/

#### Default

```ts
rgb(0,0,0)
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`fill`](/api/classes/polyline/#fill)

#### Defined in

[src/shapes/Object/Object.ts:195](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L195)

***

### fillRule

> **fillRule**: `CanvasFillRule`

Fill rule used to fill an object
accepted values are nonzero, evenodd
<b>Backwards incompatibility note:</b> This property was used for setting globalCompositeOperation until v1.4.12 (use `globalCompositeOperation` instead)

#### Default

```ts
nonzero
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`fillRule`](/api/classes/polyline/#fillrule)

#### Defined in

[src/shapes/Object/Object.ts:196](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L196)

***

### flipX

> **flipX**: `boolean`

When true, an object is rendered as flipped horizontally

#### Default

```ts
false
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`flipX`](/api/classes/polyline/#flipx)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:567](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L567)

***

### flipY

> **flipY**: `boolean`

When true, an object is rendered as flipped vertically

#### Default

```ts
false
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`flipY`](/api/classes/polyline/#flipy)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:568](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L568)

***

### globalCompositeOperation

> **globalCompositeOperation**: `GlobalCompositeOperation`

Composite rule used for canvas globalCompositeOperation

#### Default

```ts

```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`globalCompositeOperation`](/api/classes/polyline/#globalcompositeoperation)

#### Defined in

[src/shapes/Object/Object.ts:204](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L204)

***

### hasBorders

> **hasBorders**: `boolean`

When set to `false`, object's controlling borders are not rendered

#### Default

```ts

```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`hasBorders`](/api/classes/polyline/#hasborders)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:78](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L78)

***

### hasControls

> **hasControls**: `boolean`

When set to `false`, object's controls are not displayed and can not be used to manipulate object

#### Default

```ts
true
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`hasControls`](/api/classes/polyline/#hascontrols)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:72](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L72)

***

### height

> **height**: `number`

Object height

#### Default

```ts

```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`height`](/api/classes/polyline/#height)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:566](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L566)

***

### hoverCursor

> **hoverCursor**: `null` \| `string`

Default cursor value used when hovering over this object on canvas

#### Default

```ts
null
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`hoverCursor`](/api/classes/polyline/#hovercursor)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:86](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L86)

***

### includeDefaultValues

> **includeDefaultValues**: `boolean`

When `false`, default object's values are not included in its serialization

#### Default

```ts

```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`includeDefaultValues`](/api/classes/polyline/#includedefaultvalues)

#### Defined in

[src/shapes/Object/Object.ts:211](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L211)

***

### inverted

> **inverted**: `boolean`

Meaningful ONLY when the object is used as clipPath.
if true, the clipPath will make the object clip to the outside of the clipPath
since 2.4.0

#### Default

```ts
false
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`inverted`](/api/classes/polyline/#inverted)

#### Defined in

[src/shapes/Object/Object.ts:217](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L217)

***

### isMoving?

> `optional` **isMoving**: `boolean`

internal boolean to signal the code that the object is
part of the move action.

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`isMoving`](/api/classes/polyline/#ismoving)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:124](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L124)

***

### left

> **left**: `number`

Left position of an object.
Note that by default it's relative to object left.
You can change this by setting [originX](../../../../api/interfaces/fabricobjectprops/#originx)

#### Default

```ts
0
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`left`](/api/classes/polyline/#left)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:564](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L564)

***

### lockMovementX

> **lockMovementX**: `boolean`

When `true`, object horizontal movement is locked

#### Default

```ts

```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`lockMovementX`](/api/classes/polyline/#lockmovementx)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:56](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L56)

***

### lockMovementY

> **lockMovementY**: `boolean`

When `true`, object vertical movement is locked

#### Default

```ts

```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`lockMovementY`](/api/classes/polyline/#lockmovementy)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:57](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L57)

***

### lockRotation

> **lockRotation**: `boolean`

When `true`, object rotation is locked

#### Default

```ts

```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`lockRotation`](/api/classes/polyline/#lockrotation)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:58](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L58)

***

### lockScalingFlip

> **lockScalingFlip**: `boolean`

When `true`, object cannot be flipped by scaling into negative values

#### Default

```ts

```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`lockScalingFlip`](/api/classes/polyline/#lockscalingflip)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:63](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L63)

***

### lockScalingX

> **lockScalingX**: `boolean`

When `true`, object horizontal scaling is locked

#### Default

```ts

```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`lockScalingX`](/api/classes/polyline/#lockscalingx)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:59](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L59)

***

### lockScalingY

> **lockScalingY**: `boolean`

When `true`, object vertical scaling is locked

#### Default

```ts

```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`lockScalingY`](/api/classes/polyline/#lockscalingy)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:60](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L60)

***

### lockSkewingX

> **lockSkewingX**: `boolean`

When `true`, object horizontal skewing is locked

#### Default

```ts

```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`lockSkewingX`](/api/classes/polyline/#lockskewingx)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:61](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L61)

***

### lockSkewingY

> **lockSkewingY**: `boolean`

When `true`, object vertical skewing is locked

#### Default

```ts

```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`lockSkewingY`](/api/classes/polyline/#lockskewingy)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:62](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L62)

***

### matrixCache?

> `optional` **matrixCache**: `TMatrixCache`

storage cache for object full transform matrix

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`matrixCache`](/api/classes/polyline/#matrixcache)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:73](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L73)

***

### minScaleLimit

> **minScaleLimit**: `number`

Minimum allowed scale value of an object

#### Default

```ts
0
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`minScaleLimit`](/api/classes/polyline/#minscalelimit)

#### Defined in

[src/shapes/Object/Object.ts:190](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L190)

***

### moveCursor

> **moveCursor**: `null` \| `string`

Default cursor value used when moving this object on canvas

#### Default

```ts
null
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`moveCursor`](/api/classes/polyline/#movecursor)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:87](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L87)

***

### noScaleCache

> **noScaleCache**: `boolean`

When `true`, cache does not get updated during scaling. The picture will get blocky if scaled
too much and will be redrawn with correct details at the end of scaling.
this setting is performance and application dependant.
default to true
since 1.7.0

#### Default

```ts
true
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`noScaleCache`](/api/classes/polyline/#noscalecache)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:51](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L51)

***

### oCoords

> **oCoords**: `Record`\<`string`, `TOCoord`\>

The object's controls' position in viewport coordinates
Calculated by [Control#positionHandler](../../../../api/classes/control/#positionhandler) and [Control#calcCornerCoords](../../../../api/classes/control/#calccornercoords), depending on [padding](../../../../api/classes/fabricobject/#padding).
`corner/touchCorner` describe the 4 points forming the interactive area of the corner.
Used to draw and locate controls.

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`oCoords`](/api/classes/polyline/#ocoords)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:95](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L95)

***

### objectCaching

> **objectCaching**: `boolean`

When `true`, object is cached on an additional canvas.
When `false`, object is not cached unless necessary ( clipPath )
default to true

#### Since

1.7.0

#### Default

```ts
true
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`objectCaching`](/api/classes/polyline/#objectcaching)

#### Defined in

[src/shapes/Object/Object.ts:214](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L214)

***

### opacity

> **opacity**: `number`

Opacity of an object

#### Default

```ts
1
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`opacity`](/api/classes/polyline/#opacity)

#### Defined in

[src/shapes/Object/Object.ts:192](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L192)

***

### ~~originX~~

> **originX**: [`TOriginX`](/api/type-aliases/toriginx/)

:::caution[Deprecated]
please use 'center' as value in new projects
:::

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`originX`](/api/classes/polyline/#originx)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:576](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L576)

***

### ~~originY~~

> **originY**: [`TOriginY`](/api/type-aliases/toriginy/)

:::caution[Deprecated]
please use 'center' as value in new projects
:::

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`originY`](/api/classes/polyline/#originy)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:580](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L580)

***

### ownMatrixCache?

> `optional` **ownMatrixCache**: `TMatrixCache`

storage cache for object transform matrix

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`ownMatrixCache`](/api/classes/polyline/#ownmatrixcache)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:68](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L68)

***

### padding

> **padding**: `number`

Padding between object and its controlling borders (in pixels)

#### Default

```ts
0
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`padding`](/api/classes/polyline/#padding)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:53](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L53)

***

### paintFirst

> **paintFirst**: `"fill"` \| `"stroke"`

Determines if the fill or the stroke is drawn first (one of "fill" or "stroke")

#### Default

```ts

```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`paintFirst`](/api/classes/polyline/#paintfirst)

#### Defined in

[src/shapes/Object/Object.ts:194](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L194)

***

### parent?

> `optional` **parent**: [`Group`](/api/classes/group/)

A reference to the parent of the object
Used to keep the original parent ref when the object has been added to an ActiveSelection, hence loosing the `group` ref

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`parent`](/api/classes/polyline/#parent)

#### Defined in

[src/shapes/Object/Object.ts:1636](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1636)

***

### pathOffset

> **pathOffset**: [`Point`](/api/classes/point/)

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`pathOffset`](/api/classes/polyline/#pathoffset)

#### Defined in

[src/shapes/Polyline.ts:91](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Polyline.ts#L91)

***

### perPixelTargetFind

> **perPixelTargetFind**: `boolean`

When set to `true`, objects are "found" on canvas on per-pixel basis rather than according to bounding box

#### Default

```ts

```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`perPixelTargetFind`](/api/classes/polyline/#perpixeltargetfind)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:83](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L83)

***

### points

> **points**: [`XY`](/api/interfaces/xy/)[]

Points array

#### Default

```ts

```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`points`](/api/classes/polyline/#points)

#### Defined in

[src/shapes/Polyline.ts:50](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Polyline.ts#L50)

***

### scaleX

> **scaleX**: `number`

Object scale factor (horizontal)

#### Default

```ts
1
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`scaleX`](/api/classes/polyline/#scalex)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:569](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L569)

***

### scaleY

> **scaleY**: `number`

Object scale factor (vertical)

#### Default

```ts
1
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`scaleY`](/api/classes/polyline/#scaley)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:570](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L570)

***

### selectable

> **selectable**: `boolean`

When set to `false`, an object can not be selected for modification (using either point-click-based or group-based selection).
But events still fire on it.

#### Default

```ts

```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`selectable`](/api/classes/polyline/#selectable)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:81](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L81)

***

### ~~selectionBackgroundColor~~

> **selectionBackgroundColor**: `string`

Selection Background color of an object. colored layer behind the object when it is active.
does not mix good with globalCompositeOperation methods.

#### Default

```ts

```

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`selectionBackgroundColor`](/api/classes/polyline/#selectionbackgroundcolor)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:79](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L79)

***

### shadow

> **shadow**: `null` \| [`Shadow`](/api/classes/shadow/)

Shadow object representing shadow of this shape

#### Default

```ts
null
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`shadow`](/api/classes/polyline/#shadow)

#### Defined in

[src/shapes/Object/Object.ts:207](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L207)

***

### skewX

> **skewX**: `number`

Angle of skew on x axes of an object (in degrees)

#### Default

```ts
0
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`skewX`](/api/classes/polyline/#skewx)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:571](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L571)

***

### skewY

> **skewY**: `number`

Angle of skew on y axes of an object (in degrees)

#### Default

```ts
0
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`skewY`](/api/classes/polyline/#skewy)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:572](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L572)

***

### snapAngle?

> `optional` **snapAngle**: [`TDegree`](/api/type-aliases/tdegree/)

The angle that an object will lock to while rotating.

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`snapAngle`](/api/classes/polyline/#snapangle)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:53](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L53)

***

### snapThreshold?

> `optional` **snapThreshold**: [`TDegree`](/api/type-aliases/tdegree/)

The angle difference from the current snapped angle in which snapping should occur.
When undefined, the snapThreshold will default to the snapAngle.

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`snapThreshold`](/api/classes/polyline/#snapthreshold)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:54](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L54)

***

### stroke

> **stroke**: `null` \| `string` \| [`TFiller`](/api/type-aliases/tfiller/)

When defined, an object is rendered via stroke and this property specifies its color
takes css colors https://www.w3.org/TR/css-color-3/

#### Default

```ts
null
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`stroke`](/api/classes/polyline/#stroke)

#### Defined in

[src/shapes/Object/Object.ts:197](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L197)

***

### strokeDashArray

> **strokeDashArray**: `null` \| `number`[]

Array specifying dash pattern of an object's stroke (stroke must be defined)

#### Default

```ts
null;
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`strokeDashArray`](/api/classes/polyline/#strokedasharray)

#### Defined in

[src/shapes/Object/Object.ts:198](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L198)

***

### strokeDashOffset

> **strokeDashOffset**: `number`

Line offset of an object's stroke

#### Default

```ts
0
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`strokeDashOffset`](/api/classes/polyline/#strokedashoffset)

#### Defined in

[src/shapes/Object/Object.ts:199](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L199)

***

### strokeDiff

> **strokeDiff**: [`Point`](/api/classes/point/)

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`strokeDiff`](/api/classes/polyline/#strokediff)

#### Defined in

[src/shapes/Polyline.ts:97](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Polyline.ts#L97)

***

### strokeLineCap

> **strokeLineCap**: `CanvasLineCap`

Line endings style of an object's stroke (one of "butt", "round", "square")

#### Default

```ts
butt
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`strokeLineCap`](/api/classes/polyline/#strokelinecap)

#### Defined in

[src/shapes/Object/Object.ts:200](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L200)

***

### strokeLineJoin

> **strokeLineJoin**: `CanvasLineJoin`

Corner style of an object's stroke (one of "bevel", "round", "miter")

#### Default

```ts

```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`strokeLineJoin`](/api/classes/polyline/#strokelinejoin)

#### Defined in

[src/shapes/Object/Object.ts:201](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L201)

***

### strokeMiterLimit

> **strokeMiterLimit**: `number`

Maximum miter length (used for strokeLineJoin = "miter") of an object's stroke

#### Default

```ts
4
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`strokeMiterLimit`](/api/classes/polyline/#strokemiterlimit)

#### Defined in

[src/shapes/Object/Object.ts:202](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L202)

***

### strokeOffset

> **strokeOffset**: [`Point`](/api/classes/point/)

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`strokeOffset`](/api/classes/polyline/#strokeoffset)

#### Defined in

[src/shapes/Polyline.ts:93](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Polyline.ts#L93)

***

### strokeUniform

> **strokeUniform**: `boolean`

When `false`, the stoke width will scale with the object.
When `true`, the stroke will always match the exact pixel size entered for stroke width.
this Property does not work on Text classes or drawing call that uses strokeText,fillText methods
default to false

#### Since

2.6.0

#### Default

```ts
false
```

#### Default

```ts
false
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`strokeUniform`](/api/classes/polyline/#strokeuniform)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:583](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L583)

***

### strokeWidth

> **strokeWidth**: `number`

Width of a stroke used to render this object

#### Default

```ts
1
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`strokeWidth`](/api/classes/polyline/#strokewidth)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:582](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L582)

***

### top

> **top**: `number`

Top position of an object.
Note that by default it's relative to object top.
You can change this by setting [originY](../../../../api/interfaces/fabricobjectprops/#originy)

#### Default

```ts
0
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`top`](/api/classes/polyline/#top)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:563](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L563)

***

### touchCornerSize

> **touchCornerSize**: `number`

Size of object's controlling corners when touch interaction is detected

#### Default

```ts
24
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`touchCornerSize`](/api/classes/polyline/#touchcornersize)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:66](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L66)

***

### transparentCorners

> **transparentCorners**: `boolean`

When true, object's controlling corners are rendered as transparent inside (i.e. stroke instead of fill)

#### Default

```ts
true
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`transparentCorners`](/api/classes/polyline/#transparentcorners)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:67](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L67)

***

### visible

> **visible**: `boolean`

When set to `false`, an object is not rendered on canvas

#### Default

```ts

```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`visible`](/api/classes/polyline/#visible)

#### Defined in

[src/shapes/Object/Object.ts:209](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L209)

***

### width

> **width**: `number`

Object width

#### Default

```ts

```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`width`](/api/classes/polyline/#width)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:565](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L565)

***

### ATTRIBUTE\_NAMES

> `static` **ATTRIBUTE\_NAMES**: `string`[]

List of attribute names to account for when parsing SVG element (used by [Polyline.fromElement](../../../../api/classes/polyline/#fromelement))

#### Static

#### Member Of

Polyline
@see: http://www.w3.org/TR/SVG/shapes.html#PolylineElement

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`ATTRIBUTE_NAMES`](/api/classes/polyline/#attribute_names)

#### Defined in

[src/shapes/Polyline.ts:391](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Polyline.ts#L391)

***

### cacheProperties

> `static` **cacheProperties**: `string`[]

List of properties to consider when checking if cache needs refresh
Those properties are checked by
calls to Object.set(key, value). If the key is in this list, the object is marked as dirty
and refreshed at the next render

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`cacheProperties`](/api/classes/polyline/#cacheproperties)

#### Defined in

[src/shapes/Polyline.ts:95](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Polyline.ts#L95)

***

### colorProperties

> `static` **colorProperties**: `string`[]

List of properties to consider for animating colors.

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`colorProperties`](/api/classes/polyline/#colorproperties)

#### Defined in

[src/shapes/Object/Object.ts:1543](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1543)

***

### customProperties

> `static` **customProperties**: `string`[] = `[]`

Define a list of custom properties that will be serialized when
instance.toObject() gets called

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`customProperties`](/api/classes/polyline/#customproperties)

#### Defined in

[src/shapes/Object/Object.ts:1784](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1784)

***

### layoutProperties

> `static` **layoutProperties**: keyof [`Polyline`](/api/classes/polyline/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedPolylineProps`](/api/interfaces/serializedpolylineprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>[]

A list of properties that if changed trigger a recalculation of dimensions

#### Todo

check if you really need to recalculate for all cases

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`layoutProperties`](/api/classes/polyline/#layoutproperties)

#### Defined in

[src/shapes/Polyline.ts:80](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Polyline.ts#L80)

***

### ownDefaults

> `static` **ownDefaults**: `Partial`\<[`TClassProperties`](/api/type-aliases/tclassproperties/)\<[`Polyline`](/api/classes/polyline/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedPolylineProps`](/api/interfaces/serializedpolylineprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>\>\> = `polylineDefaultValues`

#### Overrides

[`Polyline`](/api/classes/polyline/).[`ownDefaults`](/api/classes/polyline/#owndefaults)

#### Defined in

[src/shapes/Polygon.ts:5](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Polygon.ts#L5)

***

### stateProperties

> `static` **stateProperties**: `string`[]

This list of properties is used to check if the state of an object is changed.
This state change now is only used for children of groups to understand if a group
needs its cache regenerated during a .set call

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`stateProperties`](/api/classes/polyline/#stateproperties)

#### Defined in

[src/shapes/Object/Object.ts:228](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L228)

***

### type

> `static` **type**: `string` = `'Polygon'`

The class type.
This is used for serialization and deserialization purposes and internally it can be used
to identify classes.
When we transform a class in a plain JS object we need a way to recognize which class it was,
and the type is the way we do that. It has no other purposes and you should not give one.
Hard to reach on instances and please do not use to drive instance's logic (this.constructor.type).
To idenfity a class use instanceof class ( instanceof Rect ).
We do not do that in fabricJS code because we want to try to have code splitting possible.

#### Overrides

[`Polyline`](/api/classes/polyline/).[`type`](/api/classes/polyline/#type)

#### Defined in

[src/shapes/Polygon.ts:7](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Polygon.ts#L7)

## Accessors

### type

> `get` **type**(): `string`

Legacy identifier of the class. Prefer using utils like isType or instanceOf
Will be removed in fabric 7 or 8.
The setter exists to avoid type errors in old code and possibly current deserialization code.
DO NOT build new code around this type value

#### TODO

add sustainable warning message

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

> `set` **type**(`value`): `void`

#### Parameters

• **value**: `string`

#### Returns

`string`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`type`](/api/classes/polyline/#type-1)

#### Defined in

[src/shapes/Object/Object.ts:357](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L357)

## Methods

### \_drawClipPath()

> **\_drawClipPath**(`ctx`, `clipPath`, `context`): `void`

Prepare clipPath state and cache and draw it on instance's cache

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

• **clipPath**: `undefined` \| [`BaseFabricObject`](/api/classes/basefabricobject/)\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

• **context**: `DrawContext`

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`_drawClipPath`](/api/classes/polyline/#_drawclippath)

#### Defined in

[src/shapes/Object/Object.ts:920](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L920)

***

### \_getNonTransformedDimensions()

> **\_getNonTransformedDimensions**(): [`Point`](/api/classes/point/)

stroke is taken in account in size

#### Returns

[`Point`](/api/classes/point/)

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`_getNonTransformedDimensions`](/api/classes/polyline/#_getnontransformeddimensions)

#### Defined in

[src/shapes/Polyline.ts:236](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Polyline.ts#L236)

***

### \_limitCacheSize()

> **\_limitCacheSize**(`dims`): `any`

Limit the cache dimensions so that X * Y do not cross config.perfLimitSizeTotal
and each side do not cross fabric.cacheSideLimit
those numbers are configurable so that you can get as much detail as you want
making bargain with performances.

#### Parameters

• **dims**: `any`

#### Returns

`any`

.width width of canvas

.height height of canvas

.zoomX zoomX zoom value to unscale the canvas before drawing cache

.zoomY zoomY zoom value to unscale the canvas before drawing cache

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`_limitCacheSize`](/api/classes/polyline/#_limitcachesize)

#### Defined in

[src/shapes/Object/Object.ts:406](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L406)

***

### \_removeCacheCanvas()

> **\_removeCacheCanvas**(): `void`

Remove cacheCanvas and its dimensions from the objects

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`_removeCacheCanvas`](/api/classes/polyline/#_removecachecanvas)

#### Defined in

[src/shapes/Object/Object.ts:756](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L756)

***

### \_renderControls()

> **\_renderControls**(`ctx`, `styleOverride`?): `void`

Renders controls and borders for the object
the context here is not transformed

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

Context to render on

• **styleOverride?**: `TStyleOverride` = `{}`

properties to override the object style

#### Returns

`void`

#### Todo

move to interactivity

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`_renderControls`](/api/classes/polyline/#_rendercontrols)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:435](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L435)

***

### \_setClippingProperties()

> **\_setClippingProperties**(`ctx`): `void`

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`_setClippingProperties`](/api/classes/polyline/#_setclippingproperties)

#### Defined in

[src/shapes/Object/Object.ts:1062](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1062)

***

### \_setFillStyles()

> **\_setFillStyles**(`ctx`, `__namedParameters`): `void`

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

• **\_\_namedParameters**: `Pick`\<[`Polygon`](/api/classes/polygon/), `"fill"`\>

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`_setFillStyles`](/api/classes/polyline/#_setfillstyles)

#### Defined in

[src/shapes/Object/Object.ts:1051](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1051)

***

### \_setStrokeStyles()

> **\_setStrokeStyles**(`ctx`, `decl`): `void`

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

• **decl**: `Pick`\<[`Polygon`](/api/classes/polygon/), `"stroke"` \| `"strokeDashOffset"` \| `"strokeLineCap"` \| `"strokeLineJoin"` \| `"strokeMiterLimit"` \| `"strokeWidth"`\>

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`_setStrokeStyles`](/api/classes/polyline/#_setstrokestyles)

#### Defined in

[src/shapes/Object/Object.ts:1009](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1009)

***

### \_setupCompositeOperation()

> **\_setupCompositeOperation**(`ctx`): `void`

Sets canvas globalCompositeOperation for specific object
custom composition operation for the particular object can be specified using globalCompositeOperation property

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

Rendering canvas context

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`_setupCompositeOperation`](/api/classes/polyline/#_setupcompositeoperation)

#### Defined in

[src/shapes/Object/Object.ts:1518](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1518)

***

### \_toSVG()

> **\_toSVG**(): `string`[]

Returns svg representation of an instance

#### Returns

`string`[]

an array of strings with the specific svg representation
of the instance

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`_toSVG`](/api/classes/polyline/#_tosvg)

#### Defined in

[src/shapes/Polyline.ts:326](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Polyline.ts#L326)

***

### addPaintOrder()

> **addPaintOrder**(`this`): `string`

#### Parameters

• **this**: `FabricObjectSVGExportMixin` & [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Returns

`string`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`addPaintOrder`](/api/classes/polyline/#addpaintorder)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:249](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/FabricObjectSVGExportMixin.ts#L249)

***

### animate()

> **animate**\<`T`\>(`animatable`, `options`?): `Record`\<`string`, [`TAnimation`](/api/namespaces/util/type-aliases/tanimation/)\<`T`\>\>

Animates object's properties

#### Type Parameters

• **T** *extends* `number` \| `number`[] \| [`TColorArg`](/api/type-aliases/tcolorarg/)

#### Parameters

• **animatable**: `Record`\<`string`, `T`\>

map of keys and end values

• **options?**: `Partial`\<[`AnimationOptions`](/api/namespaces/util/type-aliases/animationoptions/)\<`T`\>\>

#### Returns

`Record`\<`string`, [`TAnimation`](/api/namespaces/util/type-aliases/tanimation/)\<`T`\>\>

map of animation contexts

As object — multiple properties

object.animate({ left: ..., top: ... });
object.animate({ left: ..., top: ... }, { duration: ... });

#### Tutorial

[http://fabricjs.com/fabric-intro-part-2#animation](http://fabricjs.com/fabric-intro-part-2#animation)

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`animate`](/api/classes/polyline/#animate)

#### Defined in

[src/shapes/Object/Object.ts:1557](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1557)

***

### calcACoords()

> **calcACoords**(): [`TCornerPoint`](/api/type-aliases/tcornerpoint/)

Calculates the coordinates of the 4 corner of the bbox, in absolute coordinates.
those never change with zoom or viewport changes.

#### Returns

[`TCornerPoint`](/api/type-aliases/tcornerpoint/)

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`calcACoords`](/api/classes/polyline/#calcacoords)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:427](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L427)

***

### calcOCoords()

> **calcOCoords**(): `Record`\<`string`, `TOCoord`\>

Calculates the coordinates of the center of each control plus the corners of the control itself
This basically just delegates to each control positionHandler
WARNING: changing what is passed to positionHandler is a breaking change, since position handler
is a public api and should be done just if extremely necessary

#### Returns

`Record`\<`string`, `TOCoord`\>

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`calcOCoords`](/api/classes/polyline/#calcocoords)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:255](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L255)

***

### calcOwnMatrix()

> **calcOwnMatrix**(): [`TMat2D`](/api/type-aliases/tmat2d/)

calculate transform matrix that represents the current transformations from the
object's properties, this matrix does not include the group transformation

#### Returns

[`TMat2D`](/api/type-aliases/tmat2d/)

transform matrix for the object

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`calcOwnMatrix`](/api/classes/polyline/#calcownmatrix)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:513](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L513)

***

### calcTransformMatrix()

> **calcTransformMatrix**(`skipGroup`?): [`TMat2D`](/api/type-aliases/tmat2d/)

calculate transform matrix that represents the current transformations from the
object's properties.

#### Parameters

• **skipGroup?**: `boolean` = `false`

return transform matrix for object not counting parent transformations
There are some situation in which this is useful to avoid the fake rotation.

#### Returns

[`TMat2D`](/api/type-aliases/tmat2d/)

transform matrix for the object

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`calcTransformMatrix`](/api/classes/polyline/#calctransformmatrix)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:485](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L485)

***

### canDrop()

> **canDrop**(`_e`): `boolean`

Override to customize drag and drop behavior

#### Parameters

• **\_e**: `DragEvent`

#### Returns

`boolean`

true if the object currently dragged can be dropped on the target

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`canDrop`](/api/classes/polyline/#candrop)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:701](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L701)

***

### clearContextTop()

> **clearContextTop**(`restoreManually`?): `undefined` \| `CanvasRenderingContext2D`

Clears the canvas.contextTop in a specific area that corresponds to the object's bounding box
that is in the canvas.contextContainer.
This function is used to clear pieces of contextTop where we render ephemeral effects on top of the object.
Example: blinking cursor text selection, drag effects.

#### Parameters

• **restoreManually?**: `boolean`

When true won't restore the context after clear, in order to draw something else.

#### Returns

`undefined` \| `CanvasRenderingContext2D`

canvas.contextTop that is either still transformed
with the object transformMatrix, or restored to neutral transform

#### Todo

discuss swapping restoreManually with a renderCallback, but think of async issues

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`clearContextTop`](/api/classes/polyline/#clearcontexttop)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:627](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L627)

***

### clone()

> **clone**(`propertiesToInclude`?): `Promise`\<[`Polygon`](/api/classes/polygon/)\>

Clones an instance.

#### Parameters

• **propertiesToInclude?**: `string`[]

Any properties that you might want to additionally include in the output

#### Returns

`Promise`\<[`Polygon`](/api/classes/polygon/)\>

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`clone`](/api/classes/polyline/#clone)

#### Defined in

[src/shapes/Object/Object.ts:1292](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1292)

***

### cloneAsImage()

> **cloneAsImage**(`options`?): [`FabricImage`](/api/classes/fabricimage/)\<`Partial`\<[`ImageProps`](/api/interfaces/imageprops/)\>, [`SerializedImageProps`](/api/interfaces/serializedimageprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

Creates an instance of Image out of an object
makes use of toCanvasElement.
Once this method was based on toDataUrl and loadImage, so it also had a quality
and format option. toCanvasElement is faster and produce no loss of quality.
If you need to get a real Jpeg or Png from an object, using toDataURL is the right way to do it.
toCanvasElement and then toBlob from the obtained canvas is also a good option.

#### Parameters

• **options?**: `ObjectToCanvasElementOptions`

for clone as image, passed to toDataURL

#### Returns

[`FabricImage`](/api/classes/fabricimage/)\<`Partial`\<[`ImageProps`](/api/interfaces/imageprops/)\>, [`SerializedImageProps`](/api/interfaces/serializedimageprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

Object cloned as image.

#### Todo

fix the export type, it could not be Image but the type that getClass return for 'image'.

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`cloneAsImage`](/api/classes/polyline/#cloneasimage)

#### Defined in

[src/shapes/Object/Object.ts:1318](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1318)

***

### complexity()

> **complexity**(): `number`

Returns complexity of an instance

#### Returns

`number`

complexity of this instance

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`complexity`](/api/classes/polyline/#complexity)

#### Defined in

[src/shapes/Polyline.ts:379](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Polyline.ts#L379)

***

### containsPoint()

> **containsPoint**(`point`): `boolean`

Checks if point is inside the object

#### Parameters

• **point**: [`Point`](/api/classes/point/)

Point to check against

#### Returns

`boolean`

true if point is inside the object

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`containsPoint`](/api/classes/polyline/#containspoint)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:282](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L282)

***

### dispose()

> **dispose**(): `void`

cancel instance's running animations
override if necessary to dispose artifacts such as `clipPath`

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`dispose`](/api/classes/polyline/#dispose)

#### Defined in

[src/shapes/Object/Object.ts:1528](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1528)

***

### drawBorders()

> **drawBorders**(`ctx`, `options`, `styleOverride`?): `void`

Draws borders of an object's bounding box.
Requires public properties: width, height
Requires public options: padding, borderColor

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

Context to draw on

• **options**: `Required`\<`Omit`\<[`TComposeMatrixArgs`](/api/namespaces/util/type-aliases/tcomposematrixargs/), `"flipX"` \| `"flipY"`\>\>

object representing current object parameters

• **styleOverride?**: `TStyleOverride`

object to override the object style

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`drawBorders`](/api/classes/polyline/#drawborders)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:478](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L478)

***

### drawCacheOnCanvas()

> **drawCacheOnCanvas**(`this`, `ctx`): `void`

Paint the cached copy of the object on the target context.

#### Parameters

• **this**: `TCachedFabricObject`\<[`BaseFabricObject`](/api/classes/basefabricobject/)\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>\>

• **ctx**: `CanvasRenderingContext2D`

Context to render on

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`drawCacheOnCanvas`](/api/classes/polyline/#drawcacheoncanvas)

#### Defined in

[src/shapes/Object/Object.ts:942](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L942)

***

### drawClipPathOnCache()

> **drawClipPathOnCache**(`ctx`, `clipPath`, `canvasWithClipPath`): `void`

Execute the drawing operation for an object clipPath

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

Context to render on

• **clipPath**: [`BaseFabricObject`](/api/classes/basefabricobject/)\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

• **canvasWithClipPath**: `HTMLCanvasElement`

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`drawClipPathOnCache`](/api/classes/polyline/#drawclippathoncache)

#### Defined in

[src/shapes/Object/Object.ts:847](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L847)

***

### drawControls()

> **drawControls**(`ctx`, `styleOverride`): `void`

Draws corners of an object's bounding box.
Requires public properties: width, height
Requires public options: cornerSize, padding
Be aware that since fabric 6.0 this function does not call setCoords anymore.
setCoords needs to be called manually if the object of which we are rendering controls
is outside the standard selection and transform process.

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

Context to draw on

• **styleOverride**: `Partial`\<`Pick`\<[`InteractiveFabricObject`](/api/classes/interactivefabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>, `"cornerStyle"` \| `"cornerSize"` \| `"cornerColor"` \| `"cornerStrokeColor"` \| `"cornerDashArray"` \| `"transparentCorners"`\>\> = `{}`

object to override the object style

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`drawControls`](/api/classes/polyline/#drawcontrols)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:550](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L550)

***

### drawControlsConnectingLines()

> **drawControlsConnectingLines**(`ctx`, `size`): `void`

Draws lines from a borders of an object's bounding box to controls that have `withConnection` property set.
Requires public properties: width, height
Requires public options: padding, borderColor

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

Context to draw on

• **size**: [`Point`](/api/classes/point/)

object size x = width, y = height

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`drawControlsConnectingLines`](/api/classes/polyline/#drawcontrolsconnectinglines)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:517](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L517)

***

### drawObject()

> **drawObject**(`ctx`, `forClipping`, `context`): `void`

Execute the drawing operation for an object on a specified context

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

Context to render on

• **forClipping**: `undefined` \| `boolean`

apply clipping styles

• **context**: `DrawContext`

additional context for rendering

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`drawObject`](/api/classes/polyline/#drawobject)

#### Defined in

[src/shapes/Object/Object.ts:872](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L872)

***

### drawSelectionBackground()

> **drawSelectionBackground**(`ctx`): `void`

Draws a colored layer behind the object, inside its selection borders.
Requires public options: padding, selectionBackgroundColor
this function is called when the context is transformed
has checks to be skipped when the object is on a staticCanvas

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

Context to draw on

#### Returns

`void`

#### Todo

evaluate if make this disappear in favor of a pre-render hook for objects
this was added by Andrea Bogazzi to make possible some feature for work reasons
it seemed a good option, now is an edge case

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`drawSelectionBackground`](/api/classes/polyline/#drawselectionbackground)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:375](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L375)

***

### findCommonAncestors()

> **findCommonAncestors**\<`T`\>(`other`): `AncestryComparison`

Compare ancestors

#### Type Parameters

• **T** *extends* [`Polygon`](/api/classes/polygon/)

#### Parameters

• **other**: `T`

#### Returns

`AncestryComparison`

an object that represent the ancestry situation.

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`findCommonAncestors`](/api/classes/polyline/#findcommonancestors)

#### Defined in

[src/shapes/Object/Object.ts:1675](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1675)

***

### fire()

> **fire**\<`K`\>(`eventName`, `options`?): `void`

Fires event with an optional options object

#### Type Parameters

• **K** *extends* keyof [`ObjectEvents`](/api/interfaces/objectevents/)

#### Parameters

• **eventName**: `K`

Event name to fire

• **options?**: [`ObjectEvents`](/api/interfaces/objectevents/)\[`K`\]

Options object

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`fire`](/api/classes/polyline/#fire)

#### Defined in

[src/Observable.ts:167](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/Observable.ts#L167)

***

### forEachControl()

> **forEachControl**(`fn`): `void`

Calls a function for each control. The function gets called,
with the control, the control's key and the object that is calling the iterator

#### Parameters

• **fn**

function to iterate over the controls over

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`forEachControl`](/api/classes/polyline/#foreachcontrol)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:353](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L353)

***

### get()

> **get**(`property`): `any`

Basic getter

#### Parameters

• **property**: `string`

Property name

#### Returns

`any`

value of a property

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`get`](/api/classes/polyline/#get)

#### Defined in

[src/CommonMethods.ts:59](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/CommonMethods.ts#L59)

***

### getActiveControl()

> **getActiveControl**(): `undefined` \| `object`

#### Returns

`undefined` \| `object`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getActiveControl`](/api/classes/polyline/#getactivecontrol)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:194](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L194)

***

### getAncestors()

> **getAncestors**(): `Ancestors`

#### Returns

`Ancestors`

ancestors (excluding `ActiveSelection`) from bottom to top

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getAncestors`](/api/classes/polyline/#getancestors)

#### Defined in

[src/shapes/Object/Object.ts:1658](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1658)

***

### getBoundingRect()

> **getBoundingRect**(): [`TBBox`](/api/type-aliases/tbbox/)

Returns coordinates of object's bounding rectangle (left, top, width, height)
the box is intended as aligned to axis of canvas.

#### Returns

[`TBBox`](/api/type-aliases/tbbox/)

Object with left, top, width, height properties

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getBoundingRect`](/api/classes/polyline/#getboundingrect)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:343](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L343)

***

### getCanvasRetinaScaling()

> **getCanvasRetinaScaling**(): `number`

#### Returns

`number`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getCanvasRetinaScaling`](/api/classes/polyline/#getcanvasretinascaling)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:400](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L400)

***

### getCenterPoint()

> **getCenterPoint**(): [`Point`](/api/classes/point/)

Returns the center coordinates of the object relative to canvas

#### Returns

[`Point`](/api/classes/point/)

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getCenterPoint`](/api/classes/polyline/#getcenterpoint)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:732](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L732)

***

### getCoords()

> **getCoords**(): [`Point`](/api/classes/point/)[]

#### Returns

[`Point`](/api/classes/point/)[]

[tl, tr, br, bl] in the scene plane

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getCoords`](/api/classes/polyline/#getcoords)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:204](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L204)

***

### getObjectOpacity()

> **getObjectOpacity**(): `number`

Return the object opacity counting also the group property

#### Returns

`number`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getObjectOpacity`](/api/classes/polyline/#getobjectopacity)

#### Defined in

[src/shapes/Object/Object.ts:607](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L607)

***

### getObjectScaling()

> **getObjectScaling**(): [`Point`](/api/classes/point/)

Return the object scale factor counting also the group scaling

#### Returns

[`Point`](/api/classes/point/)

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getObjectScaling`](/api/classes/polyline/#getobjectscaling)

#### Defined in

[src/shapes/Object/Object.ts:576](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L576)

***

### getPointByOrigin()

> **getPointByOrigin**(`originX`, `originY`): [`Point`](/api/classes/point/)

Returns the position of the object as if it has a different origin.
Take an object that has left, top set to 100, 100 with origin 'left', 'top'.
Return the values of left top ( wrapped in a point ) that you would need to keep
the same position if origin where different.
Alternatively you can use this to also find which point in the parent plane is a specific origin
( where is the bottom right corner of my object? )

#### Parameters

• **originX**: [`TOriginX`](/api/type-aliases/toriginx/)

Horizontal origin: 'left', 'center' or 'right'

• **originY**: [`TOriginY`](/api/type-aliases/toriginy/)

Vertical origin: 'top', 'center' or 'bottom'

#### Returns

[`Point`](/api/classes/point/)

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getPointByOrigin`](/api/classes/polyline/#getpointbyorigin)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:762](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L762)

***

### getRelativeCenterPoint()

> **getRelativeCenterPoint**(): [`Point`](/api/classes/point/)

Returns the center coordinates of the object relative to it's parent

#### Returns

[`Point`](/api/classes/point/)

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getRelativeCenterPoint`](/api/classes/polyline/#getrelativecenterpoint)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:743](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L743)

***

### getRelativeX()

> **getRelativeX**(): `number`

#### Returns

`number`

x position according to object's [originX](/api/api/classes/fabricobject/originx/#originx) property in parent's coordinate plane\
if parent is canvas then this property is identical to [getX](/api/api/classes/polygon/getx/#getx)

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getRelativeX`](/api/classes/polyline/#getrelativex)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:115](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L115)

***

### getRelativeXY()

> **getRelativeXY**(): [`Point`](/api/classes/point/)

#### Returns

[`Point`](/api/classes/point/)

x,y position according to object's [originX](/api/api/classes/fabricobject/originx/#originx) [originY](/api/api/classes/fabricobject/originy/#originy) properties in parent's coordinate plane

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getRelativeXY`](/api/classes/polyline/#getrelativexy)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:176](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L176)

***

### getRelativeY()

> **getRelativeY**(): `number`

#### Returns

`number`

y position according to object's [originY](/api/api/classes/fabricobject/originy/#originy) property in parent's coordinate plane\
if parent is canvas then this property is identical to [getY](/api/api/classes/polygon/gety/#gety)

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getRelativeY`](/api/classes/polyline/#getrelativey)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:131](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L131)

***

### getScaledHeight()

> **getScaledHeight**(): `number`

Returns height of an object bounding box counting transformations

#### Returns

`number`

height value

#### Todo

shouldn't this account for group transform and return the actual size in canvas coordinate plane?

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getScaledHeight`](/api/classes/polyline/#getscaledheight)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:361](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L361)

***

### getScaledWidth()

> **getScaledWidth**(): `number`

Returns width of an object's bounding box counting transformations

#### Returns

`number`

width value

#### Todo

shouldn't this account for group transform and return the actual size in canvas coordinate plane?

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getScaledWidth`](/api/classes/polyline/#getscaledwidth)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:352](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L352)

***

### getSvgCommons()

> **getSvgCommons**(`this`): `string`

Returns id attribute for svg output

#### Parameters

• **this**: `FabricObjectSVGExportMixin` & [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\> & `object`

#### Returns

`string`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getSvgCommons`](/api/classes/polyline/#getsvgcommons)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:84](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/FabricObjectSVGExportMixin.ts#L84)

***

### getSvgFilter()

> **getSvgFilter**(`this`): `string`

Returns filter for svg shadow

#### Parameters

• **this**: `FabricObjectSVGExportMixin` & [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Returns

`string`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getSvgFilter`](/api/classes/polyline/#getsvgfilter)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:76](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/FabricObjectSVGExportMixin.ts#L76)

***

### getSvgStyles()

> **getSvgStyles**(`this`, `skipShadow`?): `string`

Returns styles-string for svg-export

#### Parameters

• **this**: `FabricObjectSVGExportMixin` & [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

• **skipShadow?**: `boolean`

a boolean to skip shadow filter output

#### Returns

`string`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getSvgStyles`](/api/classes/polyline/#getsvgstyles)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:21](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/FabricObjectSVGExportMixin.ts#L21)

***

### getSvgTransform()

> **getSvgTransform**(`this`, `full`?, `additionalTransform`?): `string`

Returns transform-string for svg-export

#### Parameters

• **this**: `FabricObjectSVGExportMixin` & [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

• **full?**: `boolean`

• **additionalTransform?**: `string` = `''`

#### Returns

`string`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getSvgTransform`](/api/classes/polyline/#getsvgtransform)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:103](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/FabricObjectSVGExportMixin.ts#L103)

***

### getTotalAngle()

> **getTotalAngle**(): [`TDegree`](/api/type-aliases/tdegree/)

Returns the object angle relative to canvas counting also the group property

#### Returns

[`TDegree`](/api/type-aliases/tdegree/)

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getTotalAngle`](/api/classes/polyline/#gettotalangle)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:408](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L408)

***

### getTotalObjectScaling()

> **getTotalObjectScaling**(): [`Point`](/api/classes/point/)

Return the object scale factor counting also the group scaling, zoom and retina

#### Returns

[`Point`](/api/classes/point/)

object with scaleX and scaleY properties

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getTotalObjectScaling`](/api/classes/polyline/#gettotalobjectscaling)

#### Defined in

[src/shapes/Object/Object.ts:593](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L593)

***

### getViewportTransform()

> **getViewportTransform**(): [`TMat2D`](/api/type-aliases/tmat2d/)

Retrieves viewportTransform from Object's canvas if available

#### Returns

[`TMat2D`](/api/type-aliases/tmat2d/)

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getViewportTransform`](/api/classes/polyline/#getviewporttransform)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:418](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L418)

***

### getX()

> **getX**(): `number`

#### Returns

`number`

x position according to object's [originX](/api/api/classes/fabricobject/originx/#originx) property in canvas coordinate plane

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getX`](/api/classes/polyline/#getx)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:86](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L86)

***

### getXY()

> **getXY**(): [`Point`](/api/classes/point/)

#### Returns

[`Point`](/api/classes/point/)

x position according to object's [originX](/api/api/classes/fabricobject/originx/#originx) [originY](/api/api/classes/fabricobject/originy/#originy) properties in canvas coordinate plane

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getXY`](/api/classes/polyline/#getxy)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:146](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L146)

***

### getY()

> **getY**(): `number`

#### Returns

`number`

y position according to object's [originY](/api/api/classes/fabricobject/originy/#originy) property in canvas coordinate plane

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getY`](/api/classes/polyline/#gety)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:100](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L100)

***

### hasCommonAncestors()

> **hasCommonAncestors**\<`T`\>(`other`): `boolean`

#### Type Parameters

• **T** *extends* [`Polygon`](/api/classes/polygon/)

#### Parameters

• **other**: `T`

#### Returns

`boolean`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`hasCommonAncestors`](/api/classes/polyline/#hascommonancestors)

#### Defined in

[src/shapes/Object/Object.ts:1740](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1740)

***

### hasFill()

> **hasFill**(): `null` \| `boolean` \| `""`

return true if the object will draw a fill
Does not consider text styles. This is just a shortcut used at rendering time
We want it to be an approximation and be fast.
wrote to avoid extra caching, it has to return true when fill happens,
can guess when it will not happen at 100% chance, does not matter if it misses
some use case where the fill is invisible.

#### Returns

`null` \| `boolean` \| `""`

Boolean

#### Since

3.0.0

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`hasFill`](/api/classes/polyline/#hasfill)

#### Defined in

[src/shapes/Object/Object.ts:787](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L787)

***

### hasStroke()

> **hasStroke**(): `null` \| `boolean` \| `""`

return true if the object will draw a stroke
Does not consider text styles. This is just a shortcut used at rendering time
We want it to be an approximation and be fast.
wrote to avoid extra caching, it has to return true when stroke happens,
can guess when it will not happen at 100% chance, does not matter if it misses
some use case where the stroke is invisible.

#### Returns

`null` \| `boolean` \| `""`

Boolean

#### Since

3.0.0

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`hasStroke`](/api/classes/polyline/#hasstroke)

#### Defined in

[src/shapes/Object/Object.ts:771](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L771)

***

### intersectsWithObject()

> **intersectsWithObject**(`other`): `boolean`

Checks if object intersects with another object

#### Parameters

• **other**: `ObjectGeometry`\<[`ObjectEvents`](/api/interfaces/objectevents/)\>

Object to test

#### Returns

`boolean`

true if object intersects with another object

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`intersectsWithObject`](/api/classes/polyline/#intersectswithobject)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:232](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L232)

***

### intersectsWithRect()

> **intersectsWithRect**(`tl`, `br`): `boolean`

Checks if object intersects with the scene rect formed by tl and br

#### Parameters

• **tl**: [`Point`](/api/classes/point/)

• **br**: [`Point`](/api/classes/point/)

#### Returns

`boolean`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`intersectsWithRect`](/api/classes/polyline/#intersectswithrect)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:218](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L218)

***

### isCacheDirty()

> **isCacheDirty**(`skipCanvas`): `boolean`

Check if cache is dirty

#### Parameters

• **skipCanvas**: `boolean` = `false`

skip canvas checks because this object is painted
on parent canvas.

#### Returns

`boolean`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`isCacheDirty`](/api/classes/polyline/#iscachedirty)

#### Defined in

[src/shapes/Object/Object.ts:956](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L956)

***

### isContainedWithinObject()

> **isContainedWithinObject**(`other`): `boolean`

Checks if object is fully contained within area of another object

#### Parameters

• **other**: `ObjectGeometry`\<[`ObjectEvents`](/api/interfaces/objectevents/)\>

Object to test

#### Returns

`boolean`

true if object is fully contained within area of another object

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`isContainedWithinObject`](/api/classes/polyline/#iscontainedwithinobject)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:251](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L251)

***

### isContainedWithinRect()

> **isContainedWithinRect**(`tl`, `br`): `boolean`

Checks if object is fully contained within the scene rect formed by tl and br

#### Parameters

• **tl**: [`Point`](/api/classes/point/)

• **br**: [`Point`](/api/classes/point/)

#### Returns

`boolean`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`isContainedWithinRect`](/api/classes/polyline/#iscontainedwithinrect)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:259](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L259)

***

### isControlVisible()

> **isControlVisible**(`controlKey`): `boolean`

Returns true if the specified control is visible, false otherwise.

#### Parameters

• **controlKey**: `string`

The key of the control. Possible values are usually 'tl', 'tr', 'br', 'bl', 'ml', 'mt', 'mr', 'mb', 'mtr',
but since the control api allow for any control name, can be any string.

#### Returns

`boolean`

true if the specified control is visible, false otherwise

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`isControlVisible`](/api/classes/polyline/#iscontrolvisible)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:584](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L584)

***

### isDescendantOf()

> **isDescendantOf**(`target`): `boolean`

Checks if object is descendant of target
Should be used instead of [Group.contains](../../../../api/classes/group/#contains) or [StaticCanvas.contains](../../../../api/classes/staticcanvas/#contains) for performance reasons

#### Parameters

• **target**: `TAncestor`

#### Returns

`boolean`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`isDescendantOf`](/api/classes/polyline/#isdescendantof)

#### Defined in

[src/shapes/Object/Object.ts:1644](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1644)

***

### isInFrontOf()

> **isInFrontOf**\<`T`\>(`other`): `undefined` \| `boolean`

#### Type Parameters

• **T** *extends* [`Polygon`](/api/classes/polygon/)

#### Parameters

• **other**: `T`

object to compare against

#### Returns

`undefined` \| `boolean`

if objects do not share a common ancestor or they are strictly equal it is impossible to determine which is in front of the other; in such cases the function returns `undefined`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`isInFrontOf`](/api/classes/polyline/#isinfrontof)

#### Defined in

[src/shapes/Object/Object.ts:1750](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1750)

***

### isNotVisible()

> **isNotVisible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`isNotVisible`](/api/classes/polyline/#isnotvisible)

#### Defined in

[src/shapes/Object/Object.ts:686](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L686)

***

### isOnScreen()

> **isOnScreen**(): `boolean`

Checks if object is contained within the canvas with current viewportTransform
the check is done stopping at first point that appears on screen

#### Returns

`boolean`

true if object is fully or partially contained within canvas

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`isOnScreen`](/api/classes/polyline/#isonscreen)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:291](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L291)

***

### isOverlapping()

> **isOverlapping**\<`T`\>(`other`): `boolean`

#### Type Parameters

• **T** *extends* `ObjectGeometry`\<[`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Parameters

• **other**: `T`

#### Returns

`boolean`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`isOverlapping`](/api/classes/polyline/#isoverlapping)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:269](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L269)

***

### isPartiallyOnScreen()

> **isPartiallyOnScreen**(): `boolean`

Checks if object is partially contained within the canvas with current viewportTransform

#### Returns

`boolean`

true if object is partially contained within canvas

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`isPartiallyOnScreen`](/api/classes/polyline/#ispartiallyonscreen)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:321](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L321)

***

### isType()

> **isType**(...`types`): `boolean`

Returns true if any of the specified types is identical to the type of an instance

#### Parameters

• ...**types**: `string`[]

#### Returns

`boolean`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`isType`](/api/classes/polyline/#istype)

#### Defined in

[src/shapes/Object/Object.ts:1449](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1449)

***

### needsItsOwnCache()

> **needsItsOwnCache**(): `boolean`

When set to `true`, force the object to have its own cache, even if it is inside a group
it may be needed when your object behave in a particular way on the cache and always needs
its own isolated canvas to render correctly.
Created to be overridden
since 1.7.12

#### Returns

`boolean`

Boolean

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`needsItsOwnCache`](/api/classes/polyline/#needsitsowncache)

#### Defined in

[src/shapes/Object/Object.ts:799](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L799)

***

### off()

#### off(eventName)

> **off**\<`K`\>(`eventName`): `void`

Unsubscribe all event listeners for eventname.
Do not use this pattern. You could kill internal fabricJS events.
We know we should have protected events for internal flows, but we don't have yet

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

##### Type Parameters

• **K** *extends* keyof [`ObjectEvents`](/api/interfaces/objectevents/)

##### Parameters

• **eventName**: `K`

event name (eg. 'after:render')

##### Returns

`void`

##### Inherited from

[`Polyline`](/api/classes/polyline/).[`off`](/api/classes/polyline/#off)

##### Defined in

[src/Observable.ts:122](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/Observable.ts#L122)

#### off(eventName, handler)

> **off**\<`K`\>(`eventName`, `handler`): `void`

unsubscribe an event listener

##### Type Parameters

• **K** *extends* keyof [`ObjectEvents`](/api/interfaces/objectevents/)

##### Parameters

• **eventName**: `K`

event name (eg. 'after:render')

• **handler**: `TEventCallback`\<`any`\>

event listener to unsubscribe

##### Returns

`void`

##### Inherited from

[`Polyline`](/api/classes/polyline/).[`off`](/api/classes/polyline/#off)

##### Defined in

[src/Observable.ts:128](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/Observable.ts#L128)

#### off(handlers)

> **off**(`handlers`): `void`

unsubscribe event listeners

##### Parameters

• **handlers**: `EventRegistryObject`\<[`ObjectEvents`](/api/interfaces/objectevents/)\>

handlers key/value pairs (eg. {'after:render': handler, 'selection:cleared': handler})

##### Returns

`void`

##### Inherited from

[`Polyline`](/api/classes/polyline/).[`off`](/api/classes/polyline/#off)

##### Defined in

[src/Observable.ts:133](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/Observable.ts#L133)

#### off()

> **off**(): `void`

unsubscribe all event listeners

##### Returns

`void`

##### Inherited from

[`Polyline`](/api/classes/polyline/).[`off`](/api/classes/polyline/#off)

##### Defined in

[src/Observable.ts:137](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/Observable.ts#L137)

***

### on()

#### on(eventName, handler)

> **on**\<`K`, `E`\>(`eventName`, `handler`): `VoidFunction`

Observes specified event

##### Type Parameters

• **K** *extends* keyof [`ObjectEvents`](/api/interfaces/objectevents/)

• **E** *extends* [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> \| [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `object` \| [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<`WheelEvent`\> \| [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `InEvent` \| [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `OutEvent` \| `Partial`\<[`TEvent`](/api/interfaces/tevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>\> & `object` \| `Partial`\<[`TEvent`](/api/interfaces/tevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>\> & `object` \| `object` \| `object` \| `object` \| `TEventWithTarget`\<`DragEvent`\> \| [`DragEventData`](/api/interfaces/drageventdata/) \| [`DragEventData`](/api/interfaces/drageventdata/) & `InEvent` \| [`DragEventData`](/api/interfaces/drageventdata/) & `OutEvent` \| [`DropEventData`](/api/interfaces/dropeventdata/) \| `SimpleEventHandler`\<`Event`\> \| [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> \| [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & [`ModifyPathEvent`](/api/interfaces/modifypathevent/) \| [`ModifiedEvent`](/api/interfaces/modifiedevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

##### Parameters

• **eventName**: `K`

Event name (eg. 'after:render')

• **handler**: `TEventCallback`\<`E`\>

Function that receives a notification when an event of the specified type occurs

##### Returns

`VoidFunction`

disposer

##### Alias

on

##### Inherited from

[`Polyline`](/api/classes/polyline/).[`on`](/api/classes/polyline/#on)

##### Defined in

[src/Observable.ts:23](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/Observable.ts#L23)

#### on(handlers)

> **on**(`handlers`): `VoidFunction`

##### Parameters

• **handlers**: `EventRegistryObject`\<[`ObjectEvents`](/api/interfaces/objectevents/)\>

##### Returns

`VoidFunction`

##### Inherited from

[`Polyline`](/api/classes/polyline/).[`on`](/api/classes/polyline/#on)

##### Defined in

[src/Observable.ts:27](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/Observable.ts#L27)

***

### onDeselect()

> **onDeselect**(`_options`?): `boolean`

This callback function is called every time _discardActiveObject or _setActiveObject
try to to deselect this object. If the function returns true, the process is cancelled

#### Parameters

• **\_options?**

options sent from the upper functions

• **\_options.e?**: [`TPointerEvent`](/api/type-aliases/tpointerevent/)

• **\_options.object?**: [`InteractiveFabricObject`](/api/classes/interactivefabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Returns

`boolean`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`onDeselect`](/api/classes/polyline/#ondeselect)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:658](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L658)

***

### onDragStart()

> **onDragStart**(`_e`): `boolean`

Override to customize Drag behavior\
Fired once a drag session has started

#### Parameters

• **\_e**: `DragEvent`

#### Returns

`boolean`

true to handle the drag event

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`onDragStart`](/api/classes/polyline/#ondragstart)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:691](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L691)

***

### onSelect()

> **onSelect**(`_options`?): `boolean`

This callback function is called every time _discardActiveObject or _setActiveObject
try to to select this object. If the function returns true, the process is cancelled

#### Parameters

• **\_options?**

options sent from the upper functions

• **\_options.e?**: [`TPointerEvent`](/api/type-aliases/tpointerevent/)

event if the process is generated by an event

#### Returns

`boolean`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`onSelect`](/api/classes/polyline/#onselect)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:672](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L672)

***

### once()

#### once(eventName, handler)

> **once**\<`K`, `E`\>(`eventName`, `handler`): `VoidFunction`

Observes specified event **once**

##### Type Parameters

• **K** *extends* keyof [`ObjectEvents`](/api/interfaces/objectevents/)

• **E** *extends* [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> \| [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `object` \| [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<`WheelEvent`\> \| [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `InEvent` \| [`TPointerEventInfo`](/api/interfaces/tpointereventinfo/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & `OutEvent` \| `Partial`\<[`TEvent`](/api/interfaces/tevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>\> & `object` \| `Partial`\<[`TEvent`](/api/interfaces/tevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>\> & `object` \| `object` \| `object` \| `object` \| `TEventWithTarget`\<`DragEvent`\> \| [`DragEventData`](/api/interfaces/drageventdata/) \| [`DragEventData`](/api/interfaces/drageventdata/) & `InEvent` \| [`DragEventData`](/api/interfaces/drageventdata/) & `OutEvent` \| [`DropEventData`](/api/interfaces/dropeventdata/) \| `SimpleEventHandler`\<`Event`\> \| [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> \| [`BasicTransformEvent`](/api/interfaces/basictransformevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\> & [`ModifyPathEvent`](/api/interfaces/modifypathevent/) \| [`ModifiedEvent`](/api/interfaces/modifiedevent/)\<[`TPointerEvent`](/api/type-aliases/tpointerevent/)\>

##### Parameters

• **eventName**: `K`

Event name (eg. 'after:render')

• **handler**: `TEventCallback`\<`E`\>

Function that receives a notification when an event of the specified type occurs

##### Returns

`VoidFunction`

disposer

##### Alias

once

##### Inherited from

[`Polyline`](/api/classes/polyline/).[`once`](/api/classes/polyline/#once)

##### Defined in

[src/Observable.ts:62](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/Observable.ts#L62)

#### once(handlers)

> **once**(`handlers`): `VoidFunction`

##### Parameters

• **handlers**: `EventRegistryObject`\<[`ObjectEvents`](/api/interfaces/objectevents/)\>

##### Returns

`VoidFunction`

##### Inherited from

[`Polyline`](/api/classes/polyline/).[`once`](/api/classes/polyline/#once)

##### Defined in

[src/Observable.ts:66](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/Observable.ts#L66)

***

### render()

> **render**(`ctx`): `void`

Renders an object on a specified context

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

Context to render on

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`render`](/api/classes/polyline/#render)

#### Defined in

[src/shapes/Object/Object.ts:698](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L698)

***

### renderCache()

> **renderCache**(`this`, `options`?): `void`

#### Parameters

• **this**: `TCachedFabricObject`\<[`BaseFabricObject`](/api/classes/basefabricobject/)\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>\>

• **options?**: `any`

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`renderCache`](/api/classes/polyline/#rendercache)

#### Defined in

[src/shapes/Object/Object.ts:732](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L732)

***

### renderDragSourceEffect()

> **renderDragSourceEffect**(`_e`): `void`

Override to customize drag and drop behavior
render a specific effect when an object is the source of a drag event
example: render the selection status for the part of text that is being dragged from a text object

#### Parameters

• **\_e**: `DragEvent`

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`renderDragSourceEffect`](/api/classes/polyline/#renderdragsourceeffect)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:712](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L712)

***

### renderDropTargetEffect()

> **renderDropTargetEffect**(`_e`): `void`

Override to customize drag and drop behavior
render a specific effect when an object is the target of a drag event
used to show that the underly object can receive a drop, or to show how the
object will change when dropping. example: show the cursor where the text is about to be dropped

#### Parameters

• **\_e**: `DragEvent`

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`renderDropTargetEffect`](/api/classes/polyline/#renderdroptargeteffect)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:724](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L724)

***

### rotate()

> **rotate**(`angle`): `void`

Sets "angle" of an instance with centered rotation

#### Parameters

• **angle**: [`TDegree`](/api/type-aliases/tdegree/)

Angle value (in degrees)

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`rotate`](/api/classes/polyline/#rotate)

#### Defined in

[src/shapes/Object/Object.ts:1477](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1477)

***

### scale()

> **scale**(`value`): `void`

Scales an object (equally by x and y)

#### Parameters

• **value**: `number`

Scale factor

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`scale`](/api/classes/polyline/#scale)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:370](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L370)

***

### scaleToHeight()

> **scaleToHeight**(`value`): `void`

Scales an object to a given height, with respect to bounding box (scaling by x/y equally)

#### Parameters

• **value**: `number`

New height value

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`scaleToHeight`](/api/classes/polyline/#scaletoheight)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:393](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L393)

***

### scaleToWidth()

> **scaleToWidth**(`value`): `void`

Scales an object to a given width, with respect to bounding box (scaling by x/y equally)

#### Parameters

• **value**: `number`

New width value

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`scaleToWidth`](/api/classes/polyline/#scaletowidth)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:381](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L381)

***

### set()

> **set**(`key`, `value`?): [`Polygon`](/api/classes/polygon/)

Sets property to a given value. When changing position/dimension -related properties (left, top, scale, angle, etc.) `set` does not update position of object's borders/controls. If you need to update those, call `setCoords()`.

#### Parameters

• **key**: `string` \| `Record`\<`string`, `any`\>

Property name or object (if object, iterate over the object properties)

• **value?**: `any`

Property value (if function, the value is passed into it and its return value is used as a new one)

#### Returns

[`Polygon`](/api/classes/polygon/)

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`set`](/api/classes/polyline/#set)

#### Defined in

[src/CommonMethods.ts:29](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/CommonMethods.ts#L29)

***

### setBoundingBox()

> **setBoundingBox**(`adjustPosition`?): `void`

#### Parameters

• **adjustPosition?**: `boolean`

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`setBoundingBox`](/api/classes/polyline/#setboundingbox)

#### Defined in

[src/shapes/Polyline.ts:214](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Polyline.ts#L214)

***

### setControlVisible()

> **setControlVisible**(`controlKey`, `visible`): `void`

Sets the visibility of the specified control.
please do not use.

#### Parameters

• **controlKey**: `string`

The key of the control. Possible values are 'tl', 'tr', 'br', 'bl', 'ml', 'mt', 'mr', 'mb', 'mtr'.
but since the control api allow for any control name, can be any string.

• **visible**: `boolean`

true to set the specified control visible, false otherwise

#### Returns

`void`

#### Todo

discuss this overlap of priority here with the team. Andrea Bogazzi for details

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`setControlVisible`](/api/classes/polyline/#setcontrolvisible)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:599](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L599)

***

### setControlsVisibility()

> **setControlsVisibility**(`options`?): `void`

Sets the visibility state of object controls, this is just a bulk option for setControlVisible;

#### Parameters

• **options?**: `Record`\<`string`, `boolean`\> = `{}`

with an optional key per control
example: {Boolean} [options.bl] true to enable the bottom-left control, false to disable it

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`setControlsVisibility`](/api/classes/polyline/#setcontrolsvisibility)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:611](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L611)

***

### setCoords()

> **setCoords**(): `void`

set controls' coordinates as well
See [https://github.com/fabricjs/fabric.js/wiki/When-to-call-setCoords](https://github.com/fabricjs/fabric.js/wiki/When-to-call-setCoords) and [http://fabricjs.com/fabric-gotchas](http://fabricjs.com/fabric-gotchas)

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`setCoords`](/api/classes/polyline/#setcoords)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:343](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L343)

***

### setDimensions()

> **setDimensions**(): `void`

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`setDimensions`](/api/classes/polyline/#setdimensions)

#### Defined in

[src/shapes/Polyline.ts:210](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Polyline.ts#L210)

***

### setOnGroup()

> **setOnGroup**(): `void`

This callback function is called by the parent group of an object every
time a non-delegated property changes on the group. It is passed the key
and value as parameters. Not adding in this function's signature to avoid
Travis build error about unused variables.

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`setOnGroup`](/api/classes/polyline/#setongroup)

#### Defined in

[src/shapes/Object/Object.ts:1509](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1509)

***

### setPositionByOrigin()

> **setPositionByOrigin**(`pos`, `originX`, `originY`): `void`

Sets the position of the object taking into consideration the object's origin

#### Parameters

• **pos**: [`Point`](/api/classes/point/)

The new position of the object

• **originX**: [`TOriginX`](/api/type-aliases/toriginx/)

Horizontal origin: 'left', 'center' or 'right'

• **originY**: [`TOriginY`](/api/type-aliases/toriginy/)

Vertical origin: 'top', 'center' or 'bottom'

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`setPositionByOrigin`](/api/classes/polyline/#setpositionbyorigin)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:777](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L777)

***

### setRelativeX()

> **setRelativeX**(`value`): `void`

#### Parameters

• **value**: `number`

x position according to object's [originX](../../../../api/classes/fabricobject/#originx) property in parent's coordinate plane\
if parent is canvas then this method is identical to [setX](../../../../api/classes/polygon/#setx)

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`setRelativeX`](/api/classes/polyline/#setrelativex)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:123](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L123)

***

### setRelativeXY()

> **setRelativeXY**(`point`, `originX`?, `originY`?): `void`

As [setXY](../../../../api/classes/polygon/#setxy), but in current parent's coordinate plane (the current group if any or the canvas)

#### Parameters

• **point**: [`Point`](/api/classes/point/)

position according to object's originX originY properties in parent's coordinate plane

• **originX?**: [`TOriginX`](/api/type-aliases/toriginx/) = `...`

Horizontal origin: 'left', 'center' or 'right'

• **originY?**: [`TOriginY`](/api/type-aliases/toriginy/) = `...`

Vertical origin: 'top', 'center' or 'bottom'

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`setRelativeXY`](/api/classes/polyline/#setrelativexy)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:186](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L186)

***

### setRelativeY()

> **setRelativeY**(`value`): `void`

#### Parameters

• **value**: `number`

y position according to object's [originY](../../../../api/classes/fabricobject/#originy) property in parent's coordinate plane\
if parent is canvas then this property is identical to [setY](../../../../api/classes/polygon/#sety)

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`setRelativeY`](/api/classes/polyline/#setrelativey)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:139](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L139)

***

### setX()

> **setX**(`value`): `void`

#### Parameters

• **value**: `number`

x position according to object's [originX](../../../../api/classes/fabricobject/#originx) property in canvas coordinate plane

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`setX`](/api/classes/polyline/#setx)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:93](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L93)

***

### setXY()

> **setXY**(`point`, `originX`?, `originY`?): `void`

Set an object position to a particular point, the point is intended in absolute ( canvas ) coordinate.
You can specify originX and originY values,
that otherwise are the object's current values.

#### Parameters

• **point**: [`Point`](/api/classes/point/)

position in scene coordinate plane

• **originX?**: [`TOriginX`](/api/type-aliases/toriginx/)

Horizontal origin: 'left', 'center' or 'right'

• **originY?**: [`TOriginY`](/api/type-aliases/toriginy/)

Vertical origin: 'top', 'center' or 'bottom'

#### Returns

`void`

#### Example

```ts
object.setXY(new Point(5, 5), 'left', 'bottom').
```

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`setXY`](/api/classes/polyline/#setxy)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:163](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L163)

***

### setY()

> **setY**(`value`): `void`

#### Parameters

• **value**: `number`

y position according to object's [originY](../../../../api/classes/fabricobject/#originy) property in canvas coordinate plane

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`setY`](/api/classes/polyline/#sety)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:107](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L107)

***

### shouldCache()

> **shouldCache**(): `boolean`

Decide if the object should cache or not. Create its own cache level
objectCaching is a global flag, wins over everything
needsItsOwnCache should be used when the object drawing method requires
a cache step. None of the fabric classes requires it.
Generally you do not cache objects in groups because the group outside is cached.
Read as: cache if is needed, or if the feature is enabled but we are not already caching.

#### Returns

`boolean`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`shouldCache`](/api/classes/polyline/#shouldcache)

#### Defined in

[src/shapes/Object/Object.ts:823](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L823)

***

### shouldStartDragging()

> **shouldStartDragging**(`_e`): `boolean`

Override to customize Drag behavior
Fired from Canvas#_onMouseMove

#### Parameters

• **\_e**: [`TPointerEvent`](/api/type-aliases/tpointerevent/)

#### Returns

`boolean`

true in order for the window to start a drag session

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`shouldStartDragging`](/api/classes/polyline/#shouldstartdragging)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:682](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L682)

***

### strokeBorders()

> **strokeBorders**(`ctx`, `size`): `void`

override this function in order to customize the drawing of the control box, e.g. rounded corners, different border style.

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

ctx is rotated and translated so that (0,0) is at object's center

• **size**: [`Point`](/api/classes/point/)

the control box size used

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`strokeBorders`](/api/classes/polyline/#strokeborders)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:399](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L399)

***

### toCanvasElement()

> **toCanvasElement**(`options`): `HTMLCanvasElement`

Converts an object into a HTMLCanvas element

#### Parameters

• **options**: `ObjectToCanvasElementOptions` = `{}`

Options object

#### Returns

`HTMLCanvasElement`

Returns DOM element <canvas> with the FabricObject

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`toCanvasElement`](/api/classes/polyline/#tocanvaselement)

#### Defined in

[src/shapes/Object/Object.ts:1340](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1340)

***

### toClipPathSVG()

> **toClipPathSVG**(`this`, `reviver`?): `string`

Returns svg clipPath representation of an instance

#### Parameters

• **this**: `FabricObjectSVGExportMixin` & [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

• **reviver?**: [`TSVGReviver`](/api/type-aliases/tsvgreviver/)

Method for further parsing of svg representation.

#### Returns

`string`

svg representation of an instance

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`toClipPathSVG`](/api/classes/polyline/#toclippathsvg)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:143](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/FabricObjectSVGExportMixin.ts#L143)

***

### toDataURL()

> **toDataURL**(`options`): `string`

Converts an object into a data-url-like string

#### Parameters

• **options**: `toDataURLOptions` = `{}`

Options object

#### Returns

`string`

Returns a data: URL containing a representation of the object in the format specified by options.format

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`toDataURL`](/api/classes/polyline/#todataurl)

#### Defined in

[src/shapes/Object/Object.ts:1436](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1436)

***

### toDatalessObject()

> **toDatalessObject**(`propertiesToInclude`?): `any`

Returns (dataless) object representation of an instance

#### Parameters

• **propertiesToInclude?**: `any`[]

Any properties that you might want to additionally include in the output

#### Returns

`any`

Object representation of an instance

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`toDatalessObject`](/api/classes/polyline/#todatalessobject)

#### Defined in

[src/shapes/Object/Object.ts:1884](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1884)

***

### toJSON()

> **toJSON**(): `any`

Returns a JSON representation of an instance

#### Returns

`any`

JSON

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`toJSON`](/api/classes/polyline/#tojson)

#### Defined in

[src/shapes/Object/Object.ts:1468](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1468)

***

### toObject()

> **toObject**\<`T`, `K`\>(`propertiesToInclude`?): `Pick`\<`T`, `K`\> & [`SerializedPolylineProps`](/api/interfaces/serializedpolylineprops/)

Returns object representation of an instance

#### Type Parameters

• **T** *extends* `Omit`\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\> & [`TClassProperties`](/api/type-aliases/tclassproperties/)\<[`Polygon`](/api/classes/polygon/)\>, keyof [`SerializedPolylineProps`](/api/interfaces/serializedpolylineprops/)\>

• **K** *extends* `string` \| `number` \| `symbol` = `never`

#### Parameters

• **propertiesToInclude?**: `K`[] = `[]`

Any properties that you might want to additionally include in the output

#### Returns

`Pick`\<`T`, `K`\> & [`SerializedPolylineProps`](/api/interfaces/serializedpolylineprops/)

Object representation of an instance

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`toObject`](/api/classes/polyline/#toobject)

#### Defined in

[src/shapes/Polyline.ts:311](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Polyline.ts#L311)

***

### toSVG()

> **toSVG**(`this`, `reviver`?): `string`

Returns svg representation of an instance

#### Parameters

• **this**: `FabricObjectSVGExportMixin` & [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

• **reviver?**: [`TSVGReviver`](/api/type-aliases/tsvgreviver/)

Method for further parsing of svg representation.

#### Returns

`string`

svg representation of an instance

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`toSVG`](/api/classes/polyline/#tosvg)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:129](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/FabricObjectSVGExportMixin.ts#L129)

***

### toString()

> **toString**(): `string`

Returns a string representation of an instance

#### Returns

`string`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`toString`](/api/classes/polyline/#tostring)

#### Defined in

[src/shapes/Object/Object.ts:1924](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1924)

***

### toggle()

> **toggle**(`property`): [`Polygon`](/api/classes/polygon/)

Toggles specified property from `true` to `false` or from `false` to `true`

#### Parameters

• **property**: `string`

Property to toggle

#### Returns

[`Polygon`](/api/classes/polygon/)

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`toggle`](/api/classes/polyline/#toggle)

#### Defined in

[src/CommonMethods.ts:46](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/CommonMethods.ts#L46)

***

### transform()

> **transform**(`ctx`): `void`

Transforms context when rendering an object

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

Context

#### Returns

`void`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`transform`](/api/classes/polyline/#transform)

#### Defined in

[src/shapes/Object/Object.ts:564](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L564)

***

### transformMatrixKey()

> **transformMatrixKey**(`skipGroup`): `number`[]

#### Parameters

• **skipGroup**: `boolean` = `false`

#### Returns

`number`[]

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`transformMatrixKey`](/api/classes/polyline/#transformmatrixkey)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:453](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L453)

***

### translateToCenterPoint()

> **translateToCenterPoint**(`point`, `originX`, `originY`): [`Point`](/api/classes/point/)

Translates the coordinates from origin to center coordinates (based on the object's dimensions)

#### Parameters

• **point**: [`Point`](/api/classes/point/)

The point which corresponds to the originX and originY params

• **originX**: [`TOriginX`](/api/type-aliases/toriginx/)

Horizontal origin: 'left', 'center' or 'right'

• **originY**: [`TOriginY`](/api/type-aliases/toriginy/)

Vertical origin: 'top', 'center' or 'bottom'

#### Returns

[`Point`](/api/classes/point/)

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`translateToCenterPoint`](/api/classes/polyline/#translatetocenterpoint)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:682](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L682)

***

### translateToGivenOrigin()

> **translateToGivenOrigin**(`point`, `fromOriginX`, `fromOriginY`, `toOriginX`, `toOriginY`): [`Point`](/api/classes/point/)

Translates the coordinates from a set of origin to another (based on the object's dimensions)

#### Parameters

• **point**: [`Point`](/api/classes/point/)

The point which corresponds to the originX and originY params

• **fromOriginX**: [`TOriginX`](/api/type-aliases/toriginx/)

Horizontal origin: 'left', 'center' or 'right'

• **fromOriginY**: [`TOriginY`](/api/type-aliases/toriginy/)

Vertical origin: 'top', 'center' or 'bottom'

• **toOriginX**: [`TOriginX`](/api/type-aliases/toriginx/)

Horizontal origin: 'left', 'center' or 'right'

• **toOriginY**: [`TOriginY`](/api/type-aliases/toriginy/)

Vertical origin: 'top', 'center' or 'bottom'

#### Returns

[`Point`](/api/classes/point/)

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`translateToGivenOrigin`](/api/classes/polyline/#translatetogivenorigin)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:654](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L654)

***

### translateToOriginPoint()

> **translateToOriginPoint**(`center`, `originX`, `originY`): [`Point`](/api/classes/point/)

Translates the coordinates from center to origin coordinates (based on the object's dimensions)

#### Parameters

• **center**: [`Point`](/api/classes/point/)

The point which corresponds to center of the object

• **originX**: [`TOriginX`](/api/type-aliases/toriginx/)

Horizontal origin: 'left', 'center' or 'right'

• **originY**: [`TOriginY`](/api/type-aliases/toriginy/)

Vertical origin: 'top', 'center' or 'bottom'

#### Returns

[`Point`](/api/classes/point/)

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`translateToOriginPoint`](/api/classes/polyline/#translatetooriginpoint)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:710](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/ObjectGeometry.ts#L710)

***

### ~~willDrawShadow()~~

> **willDrawShadow**(): `boolean`

Check if this object will cast a shadow with an offset.
used by Group.shouldCache to know if child has a shadow recursively

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

#### Returns

`boolean`

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`willDrawShadow`](/api/classes/polyline/#willdrawshadow)

#### Defined in

[src/shapes/Object/Object.ts:836](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L836)

***

### \_fromObject()

> `static` **\_fromObject**\<`S`\>(`__namedParameters`, `__namedParameters`): `Promise`\<`S`\>

#### Type Parameters

• **S** *extends* [`BaseFabricObject`](/api/classes/basefabricobject/)\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>

#### Parameters

• **\_\_namedParameters**: `Record`\<`string`, `unknown`\>

• **\_\_namedParameters**: [`Abortable`](/api/type-aliases/abortable/) & `object` = `{}`

#### Returns

`Promise`\<`S`\>

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`_fromObject`](/api/classes/polyline/#_fromobject)

#### Defined in

[src/shapes/Object/Object.ts:1937](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/Object.ts#L1937)

***

### createControls()

> `static` **createControls**(): `object`

Creates the default control object.
If you prefer to have on instance of controls shared among all objects
make this function return an empty object and add controls to the ownDefaults

#### Returns

`object`

##### controls

> **controls**: `Record`\<`string`, [`Control`](/api/classes/control/)\>

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`createControls`](/api/classes/polyline/#createcontrols)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:167](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Object/InteractiveObject.ts#L167)

***

### fromElement()

> `static` **fromElement**(`element`, `options`?, `cssRules`?): `Promise`\<[`Polyline`](/api/classes/polyline/)\<`object`, [`SerializedPolylineProps`](/api/interfaces/serializedpolylineprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>\>

Returns Polyline instance from an SVG element

#### Parameters

• **element**: `HTMLElement`

Element to parser

• **options?**: [`Abortable`](/api/type-aliases/abortable/)

Options object

• **cssRules?**: `CSSRules`

#### Returns

`Promise`\<[`Polyline`](/api/classes/polyline/)\<`object`, [`SerializedPolylineProps`](/api/interfaces/serializedpolylineprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>\>

#### Static

#### Member Of

Polyline

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`fromElement`](/api/classes/polyline/#fromelement)

#### Defined in

[src/shapes/Polyline.ts:400](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Polyline.ts#L400)

***

### fromObject()

> `static` **fromObject**\<`T`\>(`object`): `Promise`\<[`Polyline`](/api/classes/polyline/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedPolylineProps`](/api/interfaces/serializedpolylineprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>\>

Returns Polyline instance from an object representation

#### Type Parameters

• **T** *extends* [`TOptions`](/api/type-aliases/toptions/)\<[`SerializedPolylineProps`](/api/interfaces/serializedpolylineprops/)\>

#### Parameters

• **object**: `T`

Object to create an instance from

#### Returns

`Promise`\<[`Polyline`](/api/classes/polyline/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedPolylineProps`](/api/interfaces/serializedpolylineprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>\>

#### Static

#### Member Of

Polyline

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`fromObject`](/api/classes/polyline/#fromobject)

#### Defined in

[src/shapes/Polyline.ts:428](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Polyline.ts#L428)

***

### getDefaults()

> `static` **getDefaults**(): `Record`\<`string`, `any`\>

#### Returns

`Record`\<`string`, `any`\>

#### Inherited from

[`Polyline`](/api/classes/polyline/).[`getDefaults`](/api/classes/polyline/#getdefaults)

#### Defined in

[src/shapes/Polyline.ts:69](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/shapes/Polyline.ts#L69)
