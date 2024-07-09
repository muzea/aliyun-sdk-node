export interface UpdateApplicationAccessPointRequest {
    /**
     * 待更新的应用接入点名称。
     * @example `aap_test`
     */
    "Name": string;
    /**
     * 描述信息。
     * @example `aap description`
     */
    "Description"?: string;
    /**
     * 更新绑定的权限策略。
     * >每个应用接入点最多允许绑定3个权限策略。
     * @example `["kst-hzz62ee817bvyyr5x****.efkd","kst-hzz62ee817bvyyr5x****.eyyp"]`
     */
    "Policies"?: string;
}
