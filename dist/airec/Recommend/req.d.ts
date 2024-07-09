export interface RecommendRequest {
    /**
     * 实例ID
     * @example `airec-test001`
     */
    "instanceId": string;
    /**
     * 物品被投放的场景ID
     * @example `test`
     */
    "sceneId"?: string;
    /**
     * 用户唯一ID
     * @example `123`
     */
    "userId"?: string;
    /**
     * 用户最后登录的IP
     * @example `192.168.1.1`
     */
    "ip"?: string;
    /**
     * 设备ID
     * @example `06e1565409c9fc4887036b974421****`
     */
    "imei"?: string;
    /**
     * 返回结果条数（0-50之间）
     * @example `10`
     */
    "returnCount": number;
    /**
     * 用于相关推荐的item（限于相关推荐场景使用）
     * @example `1001`
     */
    "items"?: string;
    /**
     * 略
     * @example `1`
     */
    "serviceType"?: string;
    /**
     * 略
     * @example `1`
     */
    "userInfo"?: string;
    /**
     * 召回排序阶段是否根据用户ID个性化排序
     * @example `true`
     */
    "rankOpen"?: boolean;
    /**
     * 推荐服务类型
     * @example `gul`
     */
    "recType"?: string;
    /**
     * 推荐过滤字符串
     * @example `eyJqb2luIjoiYW5kIiwiZmlsdGVycyI6W3siY29uZCI6ImNvbnRhaW4iLCJmaWVsZCI6InRhZ3MiLCJ2YWx1ZSI6IuWPjOS6uiJ9XX0.`
     */
    "filter"?: string;
    /**
     * 如果需要使用坑位策略，请求参数内新增strategy="fixedSlot"，此时系统将按照坑位配置返回推荐结果
     * @example `fixedSlot`
     */
    "strategy"?: string;
}
