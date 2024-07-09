export interface CreateAccountRequest {
    /**
     * AnalyticDB MySQL数仓版（3.0）集群ID。
     * > 您可以调用[DescribeDBClusters](~~129857~~)接口查看集群ID。
     * @example `am-bp1r053byu48p****`
     */
    "DBClusterId": string;
    /**
     * 数据库账号名称，需符合如下要求：
     * - 以小写字母开头，以小写字母或数字结尾。
     * - 由小写字母、数字或下划线（_）组成。
     * - 长度为2~16个字符。
     * - 不能使用预留的账号名称，如root、admin和opsadmin。
     * @example `test_accout`
     */
    "AccountName": string;
    /**
     * 数据库账号名的密码，需符合如下要求：
     * - 由大写字母、小写字母、数字、特殊字符中的任意三种组成。
     * - 特殊符号包含：`!@#$%^&*()_+-=`
     * - 密码长度为8~32个字符。
     * @example `Test_accout1`
     */
    "AccountPassword": string;
    /**
     * 账号描述。
     * - 不能以`http://`或者`https://`开头。
     * - 长度不超过256个字符。
     * @example `数据库测试账号`
     */
    "AccountDescription"?: string;
    /**
     * 账号类型，取值说明：
     * - **Normal**：普通账号。一个集群最多可以创建256个普通账号。
     * - **Super**（默认值）：高权限账号。一个集群只能创建一个高权限账号。
     * > - 当集群无账号，调用接口创建账号时，既可以创建高权限账号，也可以创建普通账号。如果集群已有高权限账号，调用接口创建账号时，必须选择Normal才能创建成功。
     * > - 账号创建完成后，高权限账号拥有该集群中所有数据库的权限。普通账号默认没有权限，需要通过高权限账号手动为普通账号授予指定数据库的权限。详情请参见[为用户授权](~~123662~~)。
     * @example `Normal`
     */
    "AccountType"?: string;
}
