export interface ListAudioFilesRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 分页序号，范围1-100。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 分页大小，范围1-100。
     * @example `10`
     */
    "PageSize": number;
    /**
     * Converting(转换中),
     * Completed(转换完成),
     * Failed(转换失败);
     * 参数不传，查询所有状态。
     * @example `Completed`
     */
    "Status"?: string;
    /**
     * 音频文件用途，默认为General(用于IVR等场景), 其他可选值为HoldMusic(通话保持等待音)。
     * @example `General`
     */
    "Usage"?: string;
}
