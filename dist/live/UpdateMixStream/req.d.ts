export interface UpdateMixStreamRequest {
    /**
     * 主播流域名。
     * ><notice>目前仅支持华东2（cn-shanghai）和华北2（cn-beijing）两个区域的域名。
     * ></notice>
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 合流任务ID。如果您通过[CreateMixStream接口](~~194148~~)创建合流任务，请查看CreateMixStream接口调用返回的参数MixStreamId值。
     * @example `5b2a046e-74d7-385e-d2d7-8a5b87e4****`
     */
    "MixStreamId": string;
    /**
     * 合流输入列表，JSON数组。
     * 参考下方的**InputStreamConfig**。
     * @example `{"InputStreamList":[{"LayoutConfig":{"fillSizeNormalized":[0.5,0.5],"fillPositionNormalized":[0,0],"positionRefer":"topLeft","fillMode":"fit"},"LayoutChildId":1,"ResourceValue":"rtmp://aliyundoc.com/caster/8564a8d1659b4dc69df5f66cf4c9****","ResourceType":"live"},{"LayoutConfig":{"fillSizeNormalized":[0.5,0.5],"fillPositionNormalized":[0.5,0],"positionRefer":"topLeft","fillMode":"fit"},"LayoutChildId":2,"ResourceValue":"http://developer.aliyundoc.com/3c3c25426cf744fdb90423e76b78a28a/69b1a16e2b1d423d9841bf27a96f134e-0b1cba51f58bb5ad3a854x96a2c735f****.mp4","ResourceType":"url"},{"LayoutConfig":{"fillSizeNormalized":[1,0.5],"fillPositionNormalized":[0,0.5],"positionRefer":"topLeft","fillMode":"fit"},"LayoutChildId":3,"ResourceValue":"http://aliyundoc.com/c0c6c5446b56432389e91535864938da/ed4adc5263b4474c954b95607a5350ae-fda757b3328438a8cf-4k57f373a0f0****.mp4","ResourceType":"url"}]}`
     */
    "InputStreamList": string;
    /**
     * 布局ID。支持：
     * - **MixStreamLayout-1-1**
     * - **MixStreamLayout-2-1**
     * - **MixStreamLayout-2-2**
     * - **MixStreamLayout-2-3**
     * - **MixStreamLayout-3-1**
     * - **MixStreamLayout-3-2**
     * - **MixStreamLayout-4-1**
     * - **USERDEFINED**（非上述预设布局，取固定值**USERDEFINED**）
     * > 更多信息请参见[合流预设布局参考](~~199361~~)
     * @example `MixStreamLayout-3-2`
     */
    "LayoutId"?: string;
}
