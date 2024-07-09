export interface DescribeAutoShowListTasksResponse {
    /**
     * 定时任务列表。包含：
     * - Status：任务状态。0为暂停，1为启动。
     * - LiveTemplate：转码配置列表。
     * - TranscodeConfig：拉流地址的转码分辨率说明。
     * - CasterId ：导播台ID。
     * @example `{"Status":0,"TranscodeConfig":{"CasterTemplate":"lp_hd", "LiveTemplate":["lhd","lsd"]}, "CasterId":"cce04ef3-2226-4865-8704-f84b8375****"}`
     */
    AutoShowListTasks: string;
    /**
     * 请求ID。
     * @example `16A96B9A-F203-4EC5-8E43-CB92E68F4CD8`
     */
    RequestId: string;
}
