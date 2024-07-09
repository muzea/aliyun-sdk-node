export interface ListAssetSelectionSelectedTargetResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `1EB12F73-6828-59D2-9FBF-F3713FD55128`
     */
    RequestId: string;
    /**
     * 数据详情。
     */
    Data: {
        /**
         * 资产ID。按机器选择时，取值为机器的uuid，按分组选择时，取值为分组ID，按VPC选择时，取值为VPC ID。
         * @example `30****`
         */
        TargetId: string;
        /**
         * 资产名称。
         * @example `jen****`
         */
        TargetName: string;
    }[];
}
