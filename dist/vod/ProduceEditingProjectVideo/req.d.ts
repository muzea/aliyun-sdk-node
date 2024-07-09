export interface ProduceEditingProjectVideoRequest {
    /**
     * 云剪辑工程ID。可通过以下方式获取：
     * - 登录[点播控制台](https://vod.console.aliyun.com)，选择**制作中心** > **视频剪辑**，查看ID。
     * - 通过[创建云剪辑工程](~~69048~~)接口创建工程时，为返回参数ProjectId的值。
     * @example `fb2101bf24b4cb318787dc****`
     */
    "ProjectId"?: string;
    /**
     * 云剪辑工程时间线，JSON格式。具体结构定义，请参见[Timeline](~~52839#07bc7fe0f2xuh~~)。
     * @example `{"VideoTracks":[{"VideoTrackClips":[{"MediaId":"cc3308ac59615a54328bc3443****"},{"MediaId":"da87a9cff645cd88bc6d8326e4****"}]}]}`
     */
    "Timeline"?: string;
    /**
     * 云剪辑工程标题。
     * @example `剪辑合成测试`
     */
    "Title"?: string;
    /**
     * 云剪辑工程描述。
     * @example `描述`
     */
    "Description"?: string;
    /**
     * 云剪辑工程封面。
     * @example `https://example.aliyundoc.com/6AB4D0E1E1C7446888351****.png`
     */
    "CoverURL"?: string;
    /**
     * 合成视频的元数据，JSON格式。具体结构定义，请参见[MediaMetadata](~~52839#title_rtf_ry5_gjp~~)。
     * @example `{"Description":"合成视频描述","Title":"合成userData测试"}`
     */
    "MediaMetadata"?: string;
    /**
     * 合成配置，JSON格式。具体结构定义，请参见[ProduceConfig](~~52839#title-ybl-7cs-y7d~~)。
     * >当地域为除上海以外的其他地域时，StorageLocation字段必填。
     * @example `{"TemplateGroupId":"6d11e25ea30a4c465435c74****"}`
     */
    "ProduceConfig"?: string;
    /**
     * 自定义设置，为JSON字符串，支持消息回调等设置。具体结构定义，请参见[UserData](~~86952#title_vz7_xzs_0c5~~)。
     * > 此参数中消息回调的使用前提是需要在控制台配置HTTP回调地址和勾选对应的回调事件类型才能使用，否则回调设置不生效。
     * @example `{"Extend":{"width":1280,"id":"028a8e56b1ebf6bb7afc74****","height":720},"MessageCallback":{"CallbackURL":"https://example.aliyundoc.com/2016-08-15/proxy/httpcallback/testcallback/","CallbackType":"http"}}`
     */
    "UserData"?: string;
    /**
     * 应用ID。默认取值： **app-1000000**。使用说明，请参见[多应用](~~113600~~)。
     * @example `app-****`
     */
    "AppId"?: string;
}
