export interface ListExperimentMetasRequest {
    /**
     * 页码（默认为1）
     * @example `1`
     */
    "Page"?: number;
    /**
     * 演练所属命名空间
     * @example `default`
     */
    "NameSpace"?: string;
    /**
     * 分页大小（默认为10）
     * @example `10`
     */
    "Size"?: number;
    /**
     * 演练所属地域ID
     * @example `cn-hangzhou`
     */
    "AhasRegionId"?: string;
}
