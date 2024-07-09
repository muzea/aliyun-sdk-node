export interface AddStudioLayoutRequest {
    /**
     * 导播台ID。
     * ><notice>需要提前创建好，必须是虚拟演播厅类型的导播台。可通过控制台或调用[CreateCaster](~~69338~~)接口添加导播台，类型需选择虚拟演播厅。
     * ></notice>
     * - 如果您通过[CreateCaster接口](~~69338~~)创建导播台，请查看CreateCaster接口调用返回的参数CasterId值。
     * - 如果您通过直播控制台创建导播台，请通过**直播控制台** > **导播台** > **云导播台**页面查看。
     * > 直播控制台云导播台页面导播台列表中的导播台名称即导播台ID。
     * @example `a2b8e671-2fe5-4642-a2ec-bf93880e****`
     */
    "CasterId": string;
    /**
     * 演播厅布局名称。
     * @example `测试布局`
     */
    "LayoutName": string;
    /**
     * 演播厅布局类型。取值：
     * - **common**：通用布局。当LayoutType取值为common时，请求参数CommonConfig为必填。
     * - **studio**：演播厅布局。当LayoutType取值为studio时，请求参数BgImageConfig和ScreenInputConfigList为必填，MediaInputConfigList为选填。
     * @example `studio`
     */
    "LayoutType": string;
    /**
     * 通用布局配置。格式为JSON字符串，请参见**CommonConfig**。
     * ><notice>当请求参数LayoutType取值为common时，本参数才必填。
     * ></notice>
     * @example `{"ChannelId":"RV01" }`
     */
    "CommonConfig"?: string;
    /**
     * 背景资源配置。格式为JSON字符串，请参见**BgImageConfig**。
     * ><notice>当请求参数LayoutType取值为studio时，本参数才必填。
     * ></notice>
     * @example `{ "Id":"k12kj31****", "MaterialId":"f080575eb5f4427684fc0715159a****" }`
     */
    "BgImageConfig"?: string;
    /**
     * 抠像输入设置。格式为JSON字符串，请参见**ScreenInputConfig**。
     * ><notice>当请求参数LayoutType取值为studio时，本参数才必填。
     * ></notice>
     * @example `[ 	{ 	"Index":"1", 	"ChannelId":"RV01", 	"Color":"green", 	"PositionX":"0.1", 	"PositionY":"0.2", 	"HeightNormalized":"0.4" 	} ]`
     */
    "ScreenInputConfigList"?: string;
    /**
     * 多媒体输入资源设置。格式为JSON字符串，请参见**MediaInputConfig**。
     * ><notice>当请求参数LayoutType取值为studio时，本参数才有效，且为选填。
     * ></notice>
     * @example `[ 	{ 	"Id":"k12kj31****", 	"Index":"1", 	"ChannelId":"RV01", 	"FillMode":"none", 	"PositionRefer":"topLeft", 	"WidthNormalized":"0.4", 	"HeightNormalized":"0.4", 	"PositionNormalized":"[0.1, 0.2]" 	},   { 	"Id":"k12kj31****", 	"Index":"2", 	"ImageMaterialId":"lkajsdfsa8fd89asd8****", 	"FillMode":"none", 	"PositionRefer":"topLeft", 	"WidthNormalized":"0.6", 	"HeightNormalized":"0.4", 	"PositionNormalized":"[0.1, 0.2]" 	} ]`
     */
    "MediaInputConfigList"?: string;
    /**
     * 图层顺序设置。格式为JSON字符串，请参见**layerOrderConfig**。
     * 支持背景素材、多媒体素材排序，暂不支持抠像层。越排在前面，越在底层。
     * @example `[ 	{ 	"Type":"media", 	"Id":"k12kj31****" 	}, 	{ 	"Type":"media", 	"Id":"k12kj31****" 	} ]`
     */
    "LayerOrderConfigList"?: string;
}
