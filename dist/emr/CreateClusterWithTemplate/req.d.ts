interface CreateClusterWithTemplateRequest {
    "RegionId"?: string;
    /**
    * 模版ID。
    * @example `CT-35498C56B3F1****`
    */ "TemplateBizId": string;
    /**
    * 用户自定义的业务标识，此字段的值对集群模版创建无影响。
    * @example `60a632f0-5909-430d-b65c-1b0f248e4947`
    */ "UniqueTag"?: string;
    /**
    * 自定义集群名称。
    * @example `hadoop_cluster_name_1`
    */ "ClusterName"?: string;
}
export { CreateClusterWithTemplateRequest };