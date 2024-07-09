export interface CreateCustomizedPropertyRequest {
    /**
     * 版本ID
     * @example `1`
     */
    "VersionId": string;
    /**
     * 所属项目ID
     * @example `P0VFCREU`
     */
    "ProjectId": string;
    /**
     * 自定义属性名
     * @example `AnotherWhiteList`
     */
    "Name": string;
    /**
     * 自定义属性值
     * @example `100,200`
     */
    "Value": string;
    /**
     * 版本类型。取值：
     * - **FOTA**：系统版本
     * - **APP**：应用版本
     * @example `FOTA`
     */
    "VersionType": string;
}
