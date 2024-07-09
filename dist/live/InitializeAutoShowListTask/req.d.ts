export interface InitializeAutoShowListTaskRequest {
    /**
     * 播单中的点播媒资文件ID列表（目前仅支持点播视频文件）。
     * 最多支持三个节目，每个节目会按照列表顺序进行播放直到EndTime会自动结束。
     * >- 您可以通过控制台或API接口返回参数获取视频文件ID。详情请参见[媒资管理](~~86057~~)或[获取音视频上传地址和凭证](~~55407~~)。- 在EndTime前节目如已经播完，默认会持续播放最后一个节目的最后一帧，直到播放结束。
     * @example `["89e02xxxxfb349axxxxa0c350d****  ","6ae0xxxxxb349axxxxa0c350a****"]`
     */
    "ResourceIds"?: string;
    /**
     * 开始时间戳，单位：毫秒。
     * @example `1645688994000`
     */
    "StartTime": number;
    /**
     * 结束时间戳，单位：毫秒。
     * @example `1645688994000`
     */
    "EndTime": number;
    /**
     * 导播台配置。包含：
     * - （必填）CasterTemplate：导播台输出分辨率。
     * - （非必填）LiveTemplate：输出转码任务列表。
     * >JSON格式字符串，结构体内部字段请按首字母大写，驼峰格式输入。
     * @example `{"CasterTemplate": "lp_ld","LiveTemplates":["lhd", "lsd","lud"]}`
     */
    "CasterConfig": string;
    /**
     * 输出的播流域名。
     * @example `example.aliyundoc.com`
     */
    "DomainName": string;
    /**
     * 用户回调地址。
     * @example `http://***.com/callback`
     */
    "CallBackUrl"?: string;
}
