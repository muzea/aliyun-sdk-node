export interface DescribeJobStatusRequest {
    /**
     * 任务ID，[BatchJobSubmit](https://next.api.aliyun.com/api/cloud-siem/2022-06-16/BatchSubmitJob?lang=JAVA&useCommon=true)提交返回的submitId。
     * @example `xxxxx_folder_xxxxxx`
     */
    "SubmitId": string;
    /**
     * 产品所在地域，默认为cn-shanghai。
     * @example `cn-shanghai`
     */
    "RegionId"?: string;
}
