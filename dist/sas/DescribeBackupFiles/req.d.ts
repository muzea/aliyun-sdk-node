export interface DescribeBackupFilesRequest {
    /**
     * 防勒索策略防护服务器的UUID。
     * @example `6d5b361f-958d-48a8-a9d2-d6e82c1a****`
     */
    "Uuid": string;
    /**
     * 备份策略文件的路径。
     * @example `“”`
     */
    "Path"?: string;
    /**
     * 备份文件版本的HASH值。
     * @example `a7f26223ef3974c6fac324cd37713ab65ab618859d20b4039192a5da44d77b63`
     */
    "SnapshotHash": string;
    /**
     * 设置从返回结果的第几页开始显示查询结果。默认值为**1**，表示从第1页开始显示。
     * @example `1`
     */
    "CurrentPage": string;
    /**
     * 设置分页查询时，每页显示的备份文件的数量。默认值为**10**，表示每页显示10条备份文件。
     * @example `10`
     */
    "PageSize": string;
}
