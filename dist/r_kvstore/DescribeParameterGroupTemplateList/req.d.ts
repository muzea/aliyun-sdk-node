export interface DescribeParameterGroupTemplateListRequest {
    /**
     * 产品类别，取值：
     * standard：社区版。
     * enterprise：Tair（Redis企业版）。
     * @example `standard`
     */
    "Category": string;
    /**
     * 兼容版本，取值：
     * Redis社区版支持5.0、6.0和7.0。
     * Tair内存型支持5.0、6.0。
     * Tair持久内存型支持6.0。
     * Tair云盘（ESSD）型支持4.0。
     * @example `5.0`
     */
    "EngineVersion": string;
    /**
     * 引擎类型，取值：
     * redis：Redis或Tair内存型。
     * tair_pena：Tair持久内存型。
     * tair_pdb：Tair云盘（ESSD）型。
     * @example `redis`
     */
    "EngineType": string;
    /**
     * 实例的角色类型，取值说明：
     * logic 集群逻辑实例；
     * db 集群db实例；
     * proxy 集群proxy实例；
     * cs 集群cs实例；
     * normal 主从db实例
     * @example `db`
     */
    "CharacterType"?: string;
}
