export interface DescribeDeploymentSetSupportedInstanceTypeFamilyResponse {
    /**
     * 支持部署集的实例规格族。
     * @example `ecs.i2g,ecs.i1,ecs.i2ne,ecs.i2gne`
     */
    InstanceTypeFamilies: string;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B7DB-A3DC7DE1****`
     */
    RequestId: string;
}
