export interface GetPublicDatasetEntityResponse {
    /**
     * 主机ID
     * @example `easygene.cn-beijing.aliyuncs.com`
     */
    HostId: string;
    /**
     * 请求ID
     * @example `DA980AD0-158F-44F3-847D-5EAB96C0EB6B`
     */
    RequestId: string;
    /**
     * 公共数据集名称
     * @example `西蒙斯基因组多样性计划`
     */
    DatasetName: string;
    /**
     * 实体类型
     * @example `sample`
     */
    EntityType: string;
    /**
     * 实体属性名称列表
     */
    Attributes: string[];
    /**
     * 该类型实体总数
     * @example `100`
     */
    TotalCount: number;
}
