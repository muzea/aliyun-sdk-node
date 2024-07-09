export interface UpdatePictureSearchAppRequest {
    /**
     * 以图搜图应用实例ID。可调用[QueryPictureSearchApps](206608)查询。
     * @example `3e429560124b44b685095df81a27****`
     */
    "AppInstanceId": string;
    /**
     * 以图搜图应用实例的名称。
     * 支持中文汉字、英文大小写、数字、下划线（_）和短划线（-），不超过64个字符（一个中文汉字算2个字符）。
     * @example `新以图搜图`
     */
    "Name": string;
    /**
     * 以图搜图应用实例的描述信息。
     * 支持中文汉字、英文大小写、数字、下划线（_）和短划线（-），不超过1024个字符（一个中文汉字算2个字符）。
     * @example `以图搜图Demo2`
     */
    "Description": string;
}
