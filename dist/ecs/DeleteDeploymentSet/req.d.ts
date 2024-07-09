export interface DeleteDeploymentSetRequest {
    /**
     * 部署集所属地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 部署集ID。如果部署集中仍有实例存在，则无法删除。
     * @example `ds-bp1g5ahlkal88d7x****`
     */
    "DeploymentSetId": string;
}
