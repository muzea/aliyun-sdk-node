export interface BatchJobSubmitRequest {
    /**
     * 任务提交配置，JSON格式。可使用[JobConfigBuilder](https://github.com/aliyun/cloud-siem-client/blob/master/src/main/java/com/aliyun/security/cloudsiem/client/sample/JobBuilderSample.java)自动生成。
     * @example `{{"autoSubmit":false,"configName":"test_builder","folderConfig":{"folderId":"rd-EUx7Qp","prodConfig":[{"allLogs":false,"allRegions":false,"logConfig":[{"logCode":"cloud_siem_rds_audit_log","logStorePattern":"vpc-test","projectPattern":"vpc-test"}],"prodCode":"rds","regions":["cn-shanghai"]},{"allLogs":true,"allRegions":true,"prodCode":"sas"}],"type":"folder"},"listenRdChange":false,"logConfigs":{"cloud_siem_rds_audit_log":{"logCode":"cloud_siem_rds_audit_log","logStorePattern":"vpc-test","projectPattern":"vpc-test"}}}}`
     */
    "JsonConfig"?: string;
    /**
     * 产品所在地域，默认为cn-shanghai。
     * @example `cn-shanghai`
     */
    "RegionId"?: string;
}
