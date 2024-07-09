export interface GetVideoListRequest {
    /**
     * 分类ID。可通过以下方式获取：
     * - 登录[点播控制台](https://vod.console.aliyun.com)，选择**配置管理** > **媒资管理配置** > **分类管理**查看分类ID。
     * - 通过[创建分类](~~56401~~)接口创建分类时，分类ID为返回参数CateId的值。
     * - 通过[获取分类及子分类](~~56406~~)接口查询分类时，为请求后返回参数CateId的值。
     * @example `781111`
     */
    "CateId"?: number;
    /**
     * 视频状态。支持获取多个状态的视频，多个状态之间使用半角逗号（,）分隔。取值：
     * - **Uploading**：上传中。
     * - **UploadFail**：上传失败。
     * - **UploadSucc**：上传完成。
     * - **Transcoding**：转码中。
     * - **TranscodeFail**：转码失败。
     * - **Checking**：审核中。
     * - **Blocked**：屏蔽。
     * - **Normal**：正常。
     * - **ProduceFail**：合成失败。
     * 各视频状态的具体含义解释及相关限制，请参见[Status：视频状态](~~52839#section-p7c-jgy-070~~)。
     * @example `Uploading,Normal`
     */
    "Status"?: string;
    /**
     * 当前页码。默认值为**1**。
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 列表页大小。默认值为**10**，最大值为**100**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 查询结果排序。取值：
     * - **CreationTime:Desc**（默认值）：按创建时间倒序。
     * - **CreationTime:Asc**：按创建时间升序。
     * @example `CreationTime:Asc`
     */
    "SortBy"?: string;
    /**
     * CreationTime（创建时间）的开始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2017-01-11T12:00:00Z`
     */
    "StartTime"?: string;
    /**
     * CreationTime的结束时间，需晚于开始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2017-01-11T12:59:00Z`
     */
    "EndTime"?: string;
    /**
     * 音/视频存储地址。
     * @example `out-****.oss-cn-shanghai.aliyuncs.com`
     */
    "StorageLocation"?: string;
}
