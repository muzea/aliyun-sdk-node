export interface ListNamespacesRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 命名空间名称。
     * @example `schedulerx-dev`
     */
    "NamespaceName"?: string;
    /**
     * 命名空间UID
     * @example `adcfc35d-e2fe-4fe9-bbaa-20e90ffc****`
     */
    "Namespace"?: string;
}
