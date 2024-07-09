export interface ModifyPGHbaConfigRequest {
    /**
     * 预留参数，无需配置。
     * @example `1`
     */
    "ClientToken"?: string;
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `pgm-bp1lymyn1v3i****`
     */
    "DBInstanceId": string;
    /**
     * 配置类型，支持以下几种方式修改AD域服务信息。
     * - **add**：添加一条或多条记录，不能与已有PriorityId参数重复。
     * - **delete**：删除一条或多条记录，将删除当前配置中**PriorityId**参数取值对应的记录。
     * - **modify**：修改一条或多条记录，将修改当前配置中**PriorityId**参数取值对应的记录。
     * - **update**：全量更新，将使用传入的配置覆盖当前配置。
     * @example `add`
     */
    "OpsType": string;
    /**
     * AD域服务信息列表。
     */
    "HbaItem": {
        /**
         * 连接类型。
         * 支持配置以下取值：
         * - **host**：该条记录验证TCP/IP连接，包括SSL连接和非SSL连接。
         * - **hostssl**：该条记录只验证通过SSL建立的TCP/IP连接。
         * - **hostnossl**：该条记录只验证通过非SSL建立的TCP/IP连接。
         * > 如果使用hostssl连接类型，需要打开SSL链路加密，具体请参见[SSL链路加密](~~229518~~)。
         * @example `host`
         */
        Type: string;
        /**
         * 掩码。如果**Address**为IP地址，可以通过此参数指定IP地址的掩码。
         * @example `0`
         */
        Mask: string;
        /**
         * 数据库名。表示允许用户访问的数据库，all表示允许用户访问所有数据库。
         * 如果配置多个，可通过逗号（,）分隔。
         * @example `all`
         */
        Database: string;
        /**
         * 表示该条记录的优先级，取值范围：0~10000，0优先级最高。
         * 此参数用于标识每条记录，新增记录时，不允许与已有记录重复。修改或删除时，需要与已有记录的PriorityId相同，用于匹配记录。
         * @example `2`
         */
        PriorityId: number;
        /**
         * 允许用户从哪个或哪些IP访问数据库，0.0.0.0/0表示允许用户从任意IP地址访问数据库。
         * @example `0.0.0.0/0`
         */
        Address: string;
        /**
         * 允许哪些用户访问数据库，填写实例的用户名。如果配置多个，可通过逗号（,）分隔。
         * @example `ldapuser`
         */
        User: string;
        /**
         * 认证方法。支持：
         * - **trust**
         * - **reject**
         * - **scram-sha-256**
         * - **md5**
         * - **password**
         * - **gss**
         * - **sspi**
         * - **ldap**
         * - **radius**
         * - **cert**
         * - **pam**
         * @example `ldap`
         */
        Method: string;
        /**
         * 认证方式对应的可选参数。本示例使用LDAP认证，需要配置。此参数的更多参数解释，请参见[Authentication Methods](https://www.postgresql.org/docs/11/auth-methods.html)。
         * @example `ldapserver=192.168.XX.XX ldapbasedn="CN=Users,DC=pgsqldomain,DC=net" ldapbinddn="CN=pgadminuser,CN=Users,DC=pgsqldomain,DC=net" ldapbindpasswd="Test123!" ldapsearchattribute="sAMAccountName"`
         */
        Option: string;
    }[];
}
