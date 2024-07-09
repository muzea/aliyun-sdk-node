export interface CreateNamespaceRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 命名空间UID，全局唯一，推荐用UUID生成。
     * @example `adcfc35d-e2fe-4fe9-bbaa-20e90ffc****`
     */
    "Uid"?: string;
    /**
     * 命名空间名称。
     * @example `test-env`
     */
    "Name": string;
    /**
     * 命名空间描述。
     * @example `Test`
     */
    "Description"?: string;
}
