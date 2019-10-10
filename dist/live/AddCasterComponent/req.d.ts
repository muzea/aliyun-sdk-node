interface AddCasterComponentRequest {
    /**
    * 区域。
    * @example `cn-shanghai`
    */ "RegionId"?: string;
    /**
    * 用于指定组件位置，每个位置至多设置一个组件，格式需符合“RC01…RC99”。
    * > 组件类型为caption时，表示引用的视频源Location。
    * @example `RC01`
    */ "LocationId": string;
    /**
    * 组件类型。可取值：**text** | **image** | **caption**。
    * @example `text`
    */ "ComponentType": string;
    /**
    * 设置该组件Layer的尺寸，布局等信息。
    * JSON格式字符串，参数名采用首字母大写、驼峰格式。
    * @example `{"HeightNormalized":"1","PositionRefer":"topRight","WidthNormalized":"0","PositionNormalized":["0.1","0.2"]}`
    */ "ComponentLayer": string;
    "OwnerId"?: number;
    /**
    * 导播间ID。
    * @example `a2b8e671-2fe5-4642-a2ec-bf93880e1a49`
    */ "CasterId": string;
    /**
    * 组件名称。默认为组件ID。
    * @example `text01`
    */ "ComponentName"?: string;
    /**
    * 组件显示的特效 。可取值：
    *
    * - **none（默认值）**：无
    * - **animateH**：水平滚动
    * - **animateV**：垂直滚动
    * @example `animateH`
    */ "Effect"?: string;
    /**
    * 设置该Layer元素属性，JSON格式字符串，参数名采用首字母大写，驼峰格式。
    * @example `{"BorderWidthNormalized":"1","SizeNormalized":"0.2","Color":"0x000000","FontName":"KaiTi","BorderColor":"0x000000","Text":"hello world!"}`
    */ "TextLayerContent"?: string;
    /**
    * 设置该Layer元素属性，JSON格式字符串，参数名采用首字母大写，驼峰格式。
    * @example `{"MaterialId":"6cf724c6ebfd4a59b5b3cec6f10d5ecf"}`
    */ "ImageLayerContent"?: string;
    /**
    * 设置该Layer元素属性，JSON格式字符串，参数名采用首字母大写，驼峰格式。
    * @example `{"BorderWidthNormalized":0.01,"SizeNormalized":0.05,"Color":"0x000000","LocationId":"RV01","SourceLan":"cn","FontName":"KaiTi","BorderColor":"0xffffff"}`
    */ "CaptionLayerContent"?: string;
}
export { AddCasterComponentRequest };