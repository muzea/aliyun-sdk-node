export interface ModifyDtsJobConfigRequest {
    /**
     * 实例所在区域，详情请参见[支持的地域列表](~~141033~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * DTS任务ID，可以调用[DescribeDtsJobs](~~209702~~)查询。
     * @example `lxsn87r328d****`
     */
    "DtsJobId"?: string;
    /**
     * 需要修改的参数，格式为JSON字符串。更多信息，请参见[Parameters参数说明](~~2536412~~)。
     * @example `[{"module":"07","name":"sink.connection.idle.second","value":60},{"module":"07","name":"sink.batch.size.maximum","value":64}]`
     */
    "Parameters"?: string;
}
