export interface CreateMixStreamRequest {
    /**
     * 主播流域名。
     * ><notice>目前仅支持华东2（cn-shanghai）和华北2（cn-beijing）两个区域的域名。
     * ></notice>
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 布局ID。取值：
     * - **MixStreamLayout-1-1**
     * - **MixStreamLayout-2-1**
     * - **MixStreamLayout-2-2**
     * - **MixStreamLayout-2-3**
     * - **MixStreamLayout-3-1**
     * - ** MixStreamLayout-3-2**
     * - **MixStreamLayout-4-1**
     * - **USERDEFINED**（非上述预设布局，固定取值**USERDEFINED**）
     * > 更多信息请参见[合流预设布局参考](~~199361~~)
     * @example `MixStreamLayout-1-1`
     */
    "LayoutId": string;
    /**
     * 合流输入列表。JSON数组。
     * 参考下方的**InputStreamConfig**。
     * @example `[{"LayoutChildId":1,"ResourceType":"live","ResourceValue":"rtmp://example.net/live/f2139ec2b8d6a191068cd****ea9064d?auth_key=1600947017-0-0-0b5645fe35d21a65ab92b394bd4d****","LayoutConfig":{"FillMode":"fit","PositionRefer":"topLeft","FillPositionNormalized":[0,0],"FillSizeNormalized":[1,1]}}]`
     */
    "InputStreamList": string;
    /**
     * 合流输出配置。格式为JSON字符串。
     * 参考下方的**OutputConfig**。
     * @example `{"AppName":"liveApp****","StreamName":"9a78fb3f5c508be0122746f677a3****","MixStreamTemplate":"lp_hd_v","ExpireDuration":"86400"}`
     */
    "OutputConfig": string;
    /**
     * 回调地址。JSON数组。
     * 当事件产生时，直播服务端会向该地址发起HTTP POST请求，具体内容将通过HTTP Body送达。
     * @example `{"CallbackUrl":"http://aliyundoc.com"}`
     */
    "CallbackConfig"?: string;
}
