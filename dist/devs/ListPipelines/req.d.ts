export interface ListPipelinesRequest {
    /**
     * 利用实体的labels字段进行筛选。精确匹配labelSelector数组中的所有条件，不同条件之间是“且”的关系
     */
    "labelSelector"?: string[];
}
