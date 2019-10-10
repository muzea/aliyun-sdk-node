interface AddAddressBookRequest {
    "RegionId"?: string;
    /**
    * 地址簿描述信息。
    * @example `DEMO地址簿`
    */ "Description": string;
    /**
    * 地址簿名称。
    * @example `demo_address_book`
    */ "GroupName": string;
    /**
    * 地址簿类型, 可选值包括：
    * - **ip**：IP地址簿
    * - **domain**：域名地址簿
    * - **port**：端口地址簿
    * - **tag**：ECS标签地址簿
    * @example `ip`
    */ "GroupType": string;
    /**
    * 访问者源IP地址。
    * @example `1.2.3.4`
    */ "SourceIp"?: string;
    /**
    * 指定返回结果语言环境。
    * - **zh**：中文
    * - **en**：英文
    * @example `zh`
    */ "Lang"?: string;
    /**
    * 地址列表，多个地址间用英文逗号分隔。
    * > 当GroupType为ip、port或domain时必须设置。
    * - 当GroupType为ip时，地址列表中填写IP地址。例如：1.2.3.4/32, 1.2.3.0/24
    * - 当GroupType为port时，地址列表中填写端口或端口范围。例如：100/200, 80
    * - 当GroupType为domain时，地址列表中填写域名。例如：demo1.aliyun.com, demo2.aliyun.com
    * @example `1.2.3.4/32, 1.2.3.0/24`
    */ "AddressList"?: string;
    /**
    * 是否自动添加新匹配标签的ECS公网IP到地址簿。
    * - **1**：表示自动添加
    * - **0**：表示不自动添加
    * @example `1`
    */ "AutoAddTagEcs"?: string;
    /**
    * 多个标签间的关系。
    * - **and**：多个标签间为“与”关系，即同时匹配多个标签的ECS公网IP才会被加入地址簿。
    * - **or**：多个标签间为“或”关系，即只要匹配一个标签的ECS公网IP就会被加入地址簿。
    * @example `and`
    */ "TagRelation"?: string;
    "TagList"?: string[];
}
export { AddAddressBookRequest };