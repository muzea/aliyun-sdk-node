export interface StartReverseWriterRequest {
    /**
     * 调用**CreateReverseDtsJob**接口生成任务的ID。
     * @example `n99m9jx822k****`
     */
    "DtsJobId": string;
    /**
     * 指定增量写入模块的位点，格式为Unix时间戳。
     * > 默认为原任务停止时DTS自动保存的位点。
     * @example `1695613785`
     */
    "CheckPoint"?: string;
}
