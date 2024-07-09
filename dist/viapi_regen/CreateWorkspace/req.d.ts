export interface CreateWorkspaceRequest {
    /**
     * 新建空间名称。
     * @example `wyqtest`
     */
    "Name": string;
    /**
     * 新建空间描述。
     * @example `wyqtest`
     */
    "Description"?: string;
    /**
     * 生产空间类型。取值如下：
     * - COMMON_CLASSIFY：通用分类
     * - COMMON_DETECT：通用检测
     * - COMMON_INSTANCE_SEGMENT：通用实例分割
     * @example `COMMON_CLASSIFY`
     */
    "Type": string;
}
