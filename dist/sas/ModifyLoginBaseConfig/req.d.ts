export interface ModifyLoginBaseConfigRequest {
    /**
     * 要修改的服务器异常登录检测的类型。取值：
     * - **login\_common\_location**：常用登录地。
     * - **login\_common\_ip**：常用登录IP。
     * - **login\_common\_time**：常用登录时间。
     * - **login\_common\_account**：常用登录账号。
     * @example `login_common_location`
     */
    "Type": string;
    /**
     * 设置服务器异常登录检测规则的详细配置信息。此参数为JSON格式，包含以下参数：
     * - **totalCount**：资产的总数量。
     * - **uuidCount**：规则生效资产的数量。
     * - **id**：服务器异常登录规则的ID。
     * - **location**：常用登录地名称。
     * > 仅参数Type取值为login\_common_location时，您需要设置此参数。
     * - **ip**：常用登录IP。
     * > 仅参数Type取值为login\_common_ip时，您需要设置此参数。
     * - **endTime**：常用登录时间的结束时间。
     * > 仅参数Type取值为login\_common_time时，您需要设置此参数。
     * - **startTime**：常用登录时间的开始时间。
     * > 仅参数Type取值为login\_common_time时，您需要设置此参数。
     * - **account**：常用登录账号。
     * > 仅参数Type取值为login\_common_account时，您需要设置此参数。
     * @example `{"totalCount":174,"uuidCount":4,"location":"黑山","id":0}`
     */
    "Config": string;
    /**
     * 服务器异常登录检测规则生效的服务器的配置信息。此参数为JSON格式，包含以下参数：
     * - **Target**：要添加或删除的服务器的UUID。
     * - **targetType**：生效资产的添加模式。取值：
     *     - **uuid**：按单个服务器添加。
     *     - **groupId**：按照服务器分组添加。
     * - **flag**：对该资产的具体操作。取值：
     *     - **del**：将该服务器从规则中删除。
     *     - **add**：将该服务器添加到规则中。
     * @example `[{"target":"inet-7c676676-06fa-442e-90fb-b802e5d6****","targetType":"uuid","flag":"add"}]`
     */
    "Target": string;
}
