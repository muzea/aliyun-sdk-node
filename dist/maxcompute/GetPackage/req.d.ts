export interface GetPackageRequest {
    /**
     * MaxCompute项目名称
     * @example `projectA`
     */
    "projectName": string;
    /**
     * package名称
     * @example `test_package`
     */
    "packageName": string;
    /**
     * package所属项目。如果package 是install 的，此参数必填。
     * @example `projectB`
     */
    "sourceProject"?: string;
}
