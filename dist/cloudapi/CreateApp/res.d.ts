export interface CreateAppResponse {
    /**
     * 标签是否存在，取值为：-**true**：存在-**false**：不存在
     * @example `false`
     */
    TagStatus: boolean;
    /**
     * 请求ID
     * @example `BA20890E-75C7-41BC-9C8B-73276B58F550`
     */
    RequestId: string;
    /**
     * APP的唯一编号
     * @example `20112314518278`
     */
    AppId: number;
}
