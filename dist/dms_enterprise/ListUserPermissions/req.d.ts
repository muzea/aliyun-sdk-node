export interface ListUserPermissionsRequest {
    /**
     * 租户ID。
     * > 鼠标移动到界面右上角的头像处，查看租户ID。具体操作，请参见[查看租户信息](~~181330~~)。
     * @example `3***`
     */
    "Tid"?: number;
    /**
     * 资源权限类型，取值如下：
     * - DATABASE： 库权限
     * - TABLE：表权限
     * - COLUMN：列权限
     * - INSTANCE: 实例权限
     * @example `DATABASE`
     */
    "PermType": string;
    /**
     * 用户ID，可通过调用接口[GetUser](~~147098~~)或[ListUsers](~~141938~~)获取该参数的值。
     * >用户ID不是用户的阿里云Uid。
     * @example `51****`
     */
    "UserId": string;
    /**
     * 数据库名。
     * @example `db_name`
     */
    "DatabaseName"?: string;
    /**
     * 搜索关键词。例如，搜索实例权限，此处可填入DMS中的实例地址，如：rm-bp144d5ky4l4r****。
     * @example `rm-bp144d5ky4l4r****`
     */
    "SearchKey"?: string;
    /**
     * 是否逻辑库，取值：
     * - true：逻辑库
     * - false：物理库
     * @example `false`
     */
    "Logic"?: boolean;
    /**
     * 环境类型，取值如下：
     * - product：生产环境
     * - dev：开发环境
     * - pre：预发环境
     * - test：测试环境
     * - sit：SIT环境
     * - uat：UAT环境
     * - pet：压测环境
     * - stag：STAG环境
     * @example `dev`
     */
    "EnvType"?: string;
    /**
     * 数据库类型，取值请参见[DbType参数说明](~~198106~~)。
     * @example `polardb`
     */
    "DbType"?: string;
    /**
     * 第几页。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页数据量。
     * @example `5`
     */
    "PageSize"?: number;
}
