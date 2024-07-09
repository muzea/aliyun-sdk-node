export interface SetDataSourceShareRequest {
    /**
     * 目标数据源所在的DataWorks工作空间ID。您可以调用[ListProjects](~~178393~~)接口获取工作空间ID。
     * @example `10000`
     */
    "ProjectId": number;
    /**
     * 待分享的目标数据源名称。
     * @example `mysql_name`
     */
    "DatasourceName": string;
    /**
     * 目标数据源所属的环境。取值如下：
     * - 0：开发环境。
     * - 1：生产环境。
     * @example `1`
     */
    "EnvType"?: string;
    /**
     * 指定需要分享目标数据源的DataWorks工作空间。分享后，该工作空间的所有成员均可查看或使用目标数据源。使用JSONARRAY格式。[{"projectId":1000,"permission":"WRITE","sharedName":"PX_DATAHUB1.shared_name"}]，
     * 参数说明如下：
     * - projectId：需要分享目标数据源的工作空间ID。
     * - permission：支持READ（读取）和WRITE（写入）两种模式权限。READ（读取）表示指定工作空间的所有成员仅可以读取目标数据源的数据，但是不能修改该数据；WRITE（写入）表示指定工作空间的所有成员可以修改目标数据源的数据。
     * - sharedName：待分享的数据源名称。
     * @example `[{"projectId":1000,"permission":"WRITE","sharedName":"PX_DATAHUB1.shared_name"}]`
     */
    "ProjectPermissions"?: string;
    /**
     * 指定需要分享目标数据源的用户。分享后，该用户可查看或使用目标数据源。使用JSONARRAY格式。[{"projectId":10000,"users":[{"userId":"276184575345452131","permission":"WRITE"}],"sharedName":"PX_DATAHUB1.shared_name"}]，
     * 参数说明如下：
     * - projectId：指定DataWorks工作空间的ID。表示需要分享目标数据源的用户仅在该工作空间下可查看或使用目标数据源。
     * - userId：需要分享目标数据源的用户ID。
     * - permission：支持READ（读取）和WRITE（写入）两种模式权限。READ（读取）表示指定的用户仅可以读取目标数据源的数据，但是不能修改该数据；WRITE（写入）表示指定的用户可以修改目标数据源的数据。
     * - sharedName：待分享的数据源名称。
     * ProjectPermissions和UserPermissions如果都为空，则该接口不会做任何修改。如果都不为空，则既会UserPermissions生效，ProjectPermissions也会生效
     * @example `[{"projectId":10000,"users":[{"userId":"276184575345452131","permission":"WRITE"}],"sharedName":"PX_DATAHUB1.shared_name"}]`
     */
    "UserPermissions"?: string;
}
