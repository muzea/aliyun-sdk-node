export interface OperateAxgGroupRequest {
    /**
     * 号码池Key。
     * 在号码隐私保护控制台，[号码池管理](https://dyplsnext.console.aliyun.com/number-pool)页面获取**号码池Key**。
     * @example `FC10000012345****`
     */
    "PoolKey": string;
    /**
     * AXG中的G组ID，即GID。
     * 可以通过以下方式查看GID：
     * - 登录号码隐私保护控制台，在[号码池管理](https://dyplsnext.console.aliyun.com/number-pool)页面筛选出**AXG隐私号**，单击**G号码组管理**即可查看所有G号码组的GID。
     * - 如果G号码组是通过接口[CreateAxgGroup](~~110250~~)创建的，则接口的返回参数**GroupID**就是此处的请求参数**GroupID**。
     * > G号码组中必须有一个及以上的电话号码。
     * @example `200001234****`
     */
    "GroupId": number;
    /**
     * 对G号码组的操作类型，取值：
     * - **addNumbers**：添加号码。
     * - **deleteNumbers**：删除号码。
     * - **overwriteNumbers**：全量替换号码。会将G号码组中原有的电话号码全部删除，并重新添加号码。
     * > - 每次添加号码时，最多添加200个号码。
     * > - 全量替换号码时，G号码组中原有的号码不能超过200个。
     * @example `addNumbers`
     */
    "OperateType": string;
    /**
     * 受到操作的电话号码。
     * 多个号码之间用英文逗号（,）分隔，每次最多操作200个号码。
     * > - 当**OperateType**参数指定为**addNumbers**时，将**Numbers**参数填写的电话号码**添加**到G号码组中。
     * > - 当**OperateType**参数指定为**deleteNumbers**时，将**Numbers**参数填写的电话号码从G号码组中**删除**。
     * > - 当**OperateType**参数指定为**overwriteNumbers**时，使用**Numbers**参数填写的电话号码**全量替换**G号码组中原有的电话号码。
     * @example `1390000****,1380000****`
     */
    "Numbers": string;
}
