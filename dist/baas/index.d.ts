interface BAAS {
    /**
    * 获取区域列表
    */ DescribeRegions(query: {
        "RegionId"?: string;
    }): Promise<{
        "code": string;
        "data": {
            "RequestId": string;
            "ErrorCode": number;
            "Success": boolean;
            "Result": {
                "Title": string;
                "RegionId": string;
                "Id": number;
                "Online": boolean;
            }[];
        };
        "requestId": string;
        "successResponse": boolean;
    }>;
    /**
    * 获取Baas中可用的根域名
    */ DescribeRootDomain(query: {
        "RegionId"?: string;
    }): Promise<{
        "code": string;
        "data": {
            "Result": string;
        };
        "requestId": string;
        "successResponse": boolean;
    }>;
    /**
    * 获取任务列表
    */ DescribeTasks(query: {
        "RegionId"?: string;
    }): Promise<{
        "code": string;
        "data": {
            "RequestId": string;
            "ErrorCode": number;
            "Success": boolean;
            "Result": any[];
        };
        "requestId": string;
        "successResponse": boolean;
    }>;
    /**
    * 调用CheckFabricOrganizationDomain检查域名是否可用。
    */ CheckFabricOrganizationDomain(query: {
        /**
        * 地域。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 域名。
        * @example `bank`
        */ "DomainCode"?: string;
        /**
        * 域名前缀。
        * 不需要包含`DescribeRootDomain`接口获取的根域名。
        * @example `bank`
        */ "Domain"?: string;
    }): Promise<{
        "Result": {
            "Prompt": string;
            "Domain": string;
            "Valid": boolean;
        };
        "RequestId": string;
        "Success": boolean;
        "ErrorCode": number;
    }>;
    /**
    * 调用DescribeFabricOrganizationMembers获取该组织所加入的联盟与联盟成员。
    */ DescribeFabricOrganizationMembers(query: {
        /**
        * 地域
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 组织ID
        * @example `peers-aaaaaa2-1eqnj5o5w****`
        */ "OrganizationId": string;
        /**
        * 位置信息
        * @example `cn-hangzhou`
        */ "Location"?: string;
    }): Promise<{
        "Result": {
            "OrganizationId": string;
            "OrganizationName": string;
            "JoinedTime": string;
            "ConsortiumName": string;
            "Description": string;
            "Domain": string;
            "State": string;
            "ConsortiumId": string;
        };
        "RequestId": string;
        "Success": boolean;
        "ErrorCode": number;
    }>;
    /**
    * 调用CreateFabricChannelMember将其他组织添加到通道中。
    */ CreateFabricChannelMember(query: {
        /**
        * 地域
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        "Organization": string[];
        /**
        * 通道ID
        * @example `chan-channelx-1l1hmckuuisxo`
        */ "ChannelId": string;
    }): Promise<{
        "Result": boolean;
        "RequestId": string;
        "Success": boolean;
        "ErrorCode": number;
    }>;
    /**
    * 调用ResetFabricOrganizationUserPassword重置用户密码。
    */ ResetFabricOrganizationUserPassword(query: {
        /**
        * 地域
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 用户名
        * @example `username`
        */ "Username": string;
        /**
        * 组织ID
        * @example `peers-aaaaaa2-1eqnj5o5w****`
        */ "OrganizationId": string;
        /**
        * 密码
        * @example `pwd`
        */ "Password"?: string;
        /**
        * 位置
        * @example `cn-hangzhou`
        */ "Location"?: string;
    }): Promise<{
        "Result": {
            "Password": string;
            "CreateTime": number;
            "ExpireTime": number;
            "Fullname": string;
            "Username": string;
            "OrganizationId": string;
        };
        "RequestId": string;
        "Success": boolean;
        "ErrorCode": number;
    }>;
    /**
    * 调用DownloadFabricOrganizationSDK下载SDK。
    */ DownloadFabricOrganizationSDK(query: {
        /**
        * 地域
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 用户名
        * @example `username`
        */ "Username": string;
        /**
        * 组织ID
        * @example `peers-aaaaaa2-1eqnj5o5w****`
        */ "OrganizationId": string;
        /**
        * 位置
        * @example `cn-hangzhou`
        */ "Location"?: string;
    }): Promise<{
        "Result": {
            "Content": string;
            "Path": string;
        };
        "RequestId": string;
        "Success": boolean;
        "ErrorCode": number;
    }>;
    /**
    * 调用DescribeFabricConsortiumDeletable查询联盟是否可删除。
    */ DescribeFabricConsortiumDeletable(query: {
        /**
        * 地域
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 联盟ID
        * @example `consortium-lianmenyumingyi-hc5d1bwl****`
        */ "ConsortiumId": string;
        /**
        * 位置
        * @example `cn-hangzhou`
        */ "Location"?: string;
    }): Promise<{
        "Result": {
            "ConsortiumId": string;
            "Deletable": boolean;
            "CodeName": string;
            "Description": string;
            "Domain": string;
            "Name": string;
            "State": string;
            "RegionId": string;
            "ZoneId": string;
        };
        "RequestId": string;
        "Success": boolean;
        "ErrorCode": number;
    }>;
    /**
    * 调用CreateFabricConsortiumMember创建一个组织加入联盟的提案。
    */ CreateFabricConsortiumMember(query: {
        /**
        * 地域
        * @example `cn-hanghzozu`
        */ "RegionId"?: string;
        "Organization": string[];
        /**
        * 联盟ID
        * @example `consortium-aaaaaa-akpcsjjac2jd`
        */ "ConsortiumId": string;
        /**
        * 邀请码
        * @example `200`
        */ "Code"?: string;
    }): Promise<{
        "Result": boolean;
        "RequestId": string;
        "Success": boolean;
        "ErrorCode": number;
    }>;
    /**
    * 调用DescribeFabricConsortiums获取联盟列表。
    */ DescribeFabricConsortiums(query: {
        /**
        * 地域
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 联盟ID
        * @example `consortium-lianmenyumingyi-hc5d1bwl****`
        */ "ConsortiumId"?: string;
        /**
        * 位置
        * @example `cn-hangzhou`
        */ "Location"?: string;
    }): Promise<{
        "Result": {
            "Domain": string;
            "ConsortiumId": string;
            "OrganizationCount": number;
            "ChannelCount": number;
            "ConsortiumName": string;
            "DeleteTime": string;
            "OwnerUid": number;
            "State": string;
            "RegionId": string;
            "RequestId": string;
            "CreateTime": string;
            "CodeName": string;
            "OwnerName": string;
            "OwnerBid": string;
            "ChannelPolicy": string;
            "SpecName": string;
            "SupportChannelConfig": boolean;
        }[];
        "RequestId": string;
        "Success": boolean;
        "ErrorCode": number;
    }>;
    /**
    * 调用DeleteFabricChaincode删除错误的链码。
    */ DeleteFabricChaincode(query: {
        /**
        * 地域
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 链码ID
        * @example `code-sacc-1pr09q7jm****`
        */ "ChaincodeId"?: string;
    }): Promise<{
        "RequestId": string;
        "Success": boolean;
        "ErrorCode": number;
    }>;
    /**
    * 调用DescribeFabricConsortiumChaincodes获取联盟的链码列表。
    */ DescribeFabricConsortiumChaincodes(query: {
        /**
        * 地域
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 联盟ID
        * @example `consortium-lianmenyumingyi-hc5d1bwlulg7`
        */ "ConsortiumId": string;
        /**
        * 位置
        * @example `cn-hangzhou`
        */ "Location"?: string;
    }): Promise<{
        "Result": {
            "ChaincodeName": string;
            "ChannelId": string;
            "Install": boolean;
            "State": string;
            "ConsortiumId": string;
            "Type": number;
            "CreateTime": string;
            "ProviderId": string;
            "ChannelName": string;
            "ChaincodeVersion": string;
            "EndorsePolicy": string;
            "ChaincodeId": string;
        }[];
        "RequestId": string;
        "Success": boolean;
        "ErrorCode": number;
    }>;
    /**
    * 调用DescribeFabricOrganizationChannels获取该组织加入的通道列表。
    */ DescribeFabricOrganizationChannels(query: {
        /**
        * 地域
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 组织ID
        * @example `peers-aaaaaa2-1eqnj5o5****`
        */ "OrganizationId": string;
        /**
        * 位置
        * @example `cn-hangzhou`
        */ "Location"?: string;
    }): Promise<{
        "Result": {
            "ConsortiumName": string;
            "Deleted": boolean;
            "ConsortiumId": string;
            "UpdateTime": string;
            "ChaincodeCount": number;
            "OwnerBid": string;
            "ChannelId": string;
            "Name": string;
            "BlockCount": number;
            "OwnerUid": number;
            "DeleteTime": string;
            "State": string;
            "RequestId": string;
            "CreateTime": string;
            "MemberCount": number;
            "OwnerName": string;
        }[];
        "RequestId": string;
        "Success": boolean;
        "ErrorCode": number;
    }>;
    /**
    * 调用InstallFabricChaincode安装链码。
    */ InstallFabricChaincode(query: {
        /**
        * 地域
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 链码ID
        * @example `chan-channelx-1l1hmckuuisxo`
        */ "ChaincodeId": string;
        /**
        * 组织ID
        * @example `peers-aaaaaa2-1eqnj5o5w9dt3`
        */ "OrganizationId": string;
        /**
        * 位置
        * @example `cn-hangzhou`
        */ "Location"?: string;
    }): Promise<{
        "Result": {
            "install": boolean;
            "channelName": string;
            "input": string;
            "ChaincodeName": string;
            "Path": string;
            "state": string;
            "chaincodeId": string;
            "type": number;
            "ChaincodeVersion": string;
            "ConsortiumId": string;
            "CreateTime": string;
            "EndorsePolicy": string;
            "Message": string;
        };
        "RequestId": string;
        "Success": boolean;
        "ErrorCode": number;
    }>;
    /**
    * 调用DescribeFabricOrganizationDeletable查询组织是否可删除。
    */ DescribeFabricOrganizationDeletable(query: {
        /**
        * 地域
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 组织ID
        * @example `peers-aaaaaa2-1eqnj5o5w****`
        */ "OrganizationId": string;
        /**
        * 位置信息
        * @example `cn-hangzhou`
        */ "Location"?: string;
    }): Promise<{
        "Result": {
            "Deletable": boolean;
            "OrganizationId": string;
            "CodeName": string;
            "Domain": string;
            "OrganizationDescription": string;
            "OrganizationName": string;
            "RegionId": string;
            "State": string;
            "ZoneId": string;
        };
        "RequestId": string;
        "Success": boolean;
        "ErrorCode": number;
    }>;
    /**
    * 调用SynchronizeFabricChaincode同步链码的升级和实例化的状态。
    */ SynchronizeFabricChaincode(query: {
        /**
        * 地域
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 链码ID
        * @example `code-sacc-1pr09q7jm****`
        */ "ChaincodeId": string;
        /**
        * 组织ID
        * @example `peers-aaaaaa2-1eqnj5o5w****`
        */ "OrganizationId": string;
    }): Promise<{
        "Result": {
            "ProviderId": string;
            "ProviderName": string;
            "ChaincodeName": string;
            "Input": string;
            "Install": boolean;
            "State": string;
            "Type": number;
            "ChannelName": string;
            "ConsortiumId": string;
            "ChaincodeVersion": string;
            "ChaincodeId": string;
            "Path": string;
        };
        "RequestId": string;
        "Success": boolean;
        "ErrorCode": number;
    }>;
    /**
    * 调用DescribeFabricOrganizationPeers获取组织的节点列表。
    */ DescribeFabricOrganizationPeers(query: {
        /**
        * 地域
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 组织ID
        * @example `peers-aaaaaa2-1eqnj5o5w****`
        */ "OrganizationId": string;
        /**
        * 位置
        * @example `cn-hangzhou`
        */ "Location"?: string;
    }): Promise<{
        "Result": {
            "Port": number;
            "Domain": string;
            "IsAnchor": boolean;
            "CreateTime": string;
            "UpdateTime": string;
            "InternetIp": string;
            "InstanceType": string;
            "IntranetIp": string;
            "OrganizationPeerName": string;
        };
        "RequestId": string;
        "Success": boolean;
        "ErrorCode": number;
    }>;
    /**
    * 调用DescribeFabricConsortiumAdminStatus获取联盟管理状态信息。
    */ DescribeFabricConsortiumAdminStatus(query: {
        /**
        * 地域
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 位置
        * @example `cn-hangzhou`
        */ "Location"?: string;
    }): Promise<{
        "Result": {
            "ConsortiumId": string;
            "ConsortiumAdministrator": boolean;
        }[];
        "RequestId": string;
        "Success": boolean;
        "ErrorCode": number;
    }>;
    /**
    * 调用DescribeFabricConsortiumMemberApproval获取联盟成员的审批状态列表。
    */ DescribeFabricConsortiumMemberApproval(query: {
        /**
        * 地域
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 联盟ID
        * @example `consortium-lianmenyumingyi-hc5d1bwlulg7`
        */ "ConsortiumId": string;
        /**
        * 位置
        * @example `cn-hangzhou`
        */ "Location"?: string;
    }): Promise<{
        "Result": {
            "ConfirmTime": string;
            "ConsortiumName": string;
            "State": string;
            "ConsortiumId": string;
            "DomainName": string;
            "ChannelCreatePolicy": string;
            "OrganizationId": string;
            "OrganizationName": string;
        }[];
        "RequestId": string;
        "Success": boolean;
        "ErrorCode": number;
    }>;
    /**
    * 调用CheckFabricConsortiumDomain检查联盟域名是否可用。
    */ CheckFabricConsortiumDomain(query: {
        /**
        * 地域。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 联盟域名。
        * @example `bank`
        */ "DomainCode": string;
    }): Promise<{
        "Result": {
            "Prompt": string;
            "Domain": string;
            "Valid": boolean;
        };
        "RequestId": string;
        "Success": boolean;
        "ErrorCode": number;
    }>;
    /**
    * 调用DescribeFabricOrganizationChaincodes获取组织的链码列表。
    */ DescribeFabricOrganizationChaincodes(query: {
        /**
        * 地域
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 组织ID
        * @example `peers-aaaaaa2-1eqnj5o5w****`
        */ "OrganizationId": string;
        /**
        * 位置信息
        * @example `cn-hangzhou`
        */ "Location"?: string;
    }): Promise<{
        "Result": {
            "ChaincodeName": string;
            "ChannelId": string;
            "State": string;
            "ConsortiumId": string;
            "Creator": string;
            "CreateTime": string;
            "Installed": string;
            "DeployTime": string;
            "ChannelName": string;
            "ChaincodeVersion": string;
            "EndorsePolicy": string;
            "ChaincodeId": string;
            "Message": string;
        }[];
        "RequestId": string;
        "Success": boolean;
        "ErrorCode": number;
    }>;
    /**
    * 调用AcceptFabricInvitation接受加入联盟的邀请。
    */ AcceptFabricInvitation(query: {
        /**
        * 地域。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 邀请码。
        * @example `secrettoken`
        */ "Code": string;
        /**
        * 是否接受。
        * @example `true`
        */ "IsAccepted"?: boolean;
    }): Promise<{
        "RequestId": string;
        "ErrorCode": number;
        "Success": boolean;
    }>;
    /**
    * 重置证书
    */ ResetAntChainCertificate(query: {
        /**
        * 地域ID
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 区块链ID
        * @example `pYogqb9v`
        */ "AntChainId": string;
    }): Promise<{
        "code": string;
        "data": {
            "RequestId": string;
            "Result": string;
        };
        "requestId": string;
        "successResponse": boolean;
    }>;
    /**
    * 根据交易哈希查询一条蚂蚁区块链的交易回执信息
    */ DescribeAntChainTransactionReceipt(query: {
        /**
        * 地域ID
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 交易哈希
        * @example `b3b0d2db83d3e670449d1e2a39d1d13b7e0e6080b0f9c6945f79eca68d1dd2ca`
        */ "Hash": string;
        /**
        * 区块链ID
        * @example `pYogqb9v`
        */ "AntChainId": string;
    }): Promise<{
        "code": string;
        "data": {
            "RequestId": string;
            "Result": {
                "Data": string;
                "Logs": string[];
                "GasUsed": string;
                "Result": number;
            };
        };
        "requestId": string;
        "successResponse": boolean;
    }>;
    /**
    * 调用DescribeFabricChaincodeUploadPolicy获取上传链码策略。
    */ DescribeFabricChaincodeUploadPolicy(query: {
        /**
        * 地域
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 组织ID
        * @example `peers-aaaaaa1-1oxw31d04****`
        */ "OrganizationId": string;
    }): Promise<{
        "Result": {
            "Dir": string;
            "Host": string;
            "Policy": string;
            "Expire": number;
            "AccessId": string;
            "Signature": string;
        };
        "RequestId": string;
        "Success": boolean;
        "ErrorCode": number;
    }>;
    /**
    * 调用DescribeFabricOrganizations获取组织列表。
    */ DescribeFabricOrganizations(query: {
        /**
        * 地域
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 位置
        * @example `cn-hangzhou`
        */ "Location"?: string;
    }): Promise<{
        "Result": {
            "OrganizationDescription": string;
            "Domain": string;
            "ZoneId": string;
            "OrganizationId": string;
            "OrganizationName": string;
            "ConsortiumCount": number;
            "UserCount": number;
            "SpecName": string;
            "State": string;
            "RegionId": string;
            "RequestId": string;
            "CreateTime": string;
            "CodeName": string;
            "PeerCount": number;
        };
        "RequestId": string;
        "Success": boolean;
        "ErrorCode": number;
    }>;
    /**
    * 调用DescribeFabricInviter获取邀请人信息。
    */ DescribeFabricInviter(query: {
        /**
        * 地域
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 邀请码
        * @example `200`
        */ "Code": string;
    }): Promise<{
        "Result": {
            "ConsortiumId": string;
            "ExpireTime": number;
            "InviterId": number;
            "ConsortiumName": string;
            "InviterName": string;
        }[];
        "RequestId": string;
        "Success": boolean;
        "ErrorCode": number;
    }>;
    /**
    * 在联盟内更新一个合约工程的属性
    */ UpdateAntChainContractProject(query: {
        /**
        * 地域ID
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 合约工程ID
        * @example `bDXK1b8Z`
        */ "ProjectId": string;
        /**
        * 合约工程名称
        * @example `更新合约工程名称`
        */ "ProjectName"?: string;
        /**
        * 合约工程版本
        * @example `v1.1.1`
        */ "ProjectVersion"?: string;
        /**
        * 合约工程描述
        * @example `合约工程的版本描述`
        */ "ProjectDescription"?: string;
    }): Promise<{
        "code": string;
        "data": {
            "RequestId": string;
            "Result": string;
        };
        "requestId": string;
        "successResponse": boolean;
    }>;
    /**
    * 查询一条蚂蚁区块链的节点信息列表
    */ DescribeAntChainNodes(query: {
        /**
        * 地域ID
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 区块链ID
        * @example `1q8B5R9p`
        */ "AntChainId": string;
    }): Promise<{
        "code": string;
        "data": {
            "RequestId": string;
            "Result": {
                "endpoints": {
                    "port": string;
                    "ip": string;
                }[];
                "nodeState": number;
                "publicKey": string;
                "nodeType": number;
                "nodeId": string;
            }[];
        };
        "requestId": string;
        "successResponse": boolean;
    }>;
    /**
    * 调用DescribeFabricChannelMembers查询通道的成员列表。
    */ DescribeFabricChannelMembers(query: {
        /**
        * 地域
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 通道ID
        * @example `chan-channelx-1l1hmckuu****`
        */ "ChannelId": string;
    }): Promise<{
        "Result": {
            "OrganizationName": string;
            "InviteTime": string;
            "ChannelId": string;
            "WithPeer": boolean;
            "OrganizationDescription": string;
            "OrganizationDomain": string;
            "State": string;
            "OrganizationId": string;
            "AcceptTime": string;
        };
        "RequestId": string;
        "Success": boolean;
        "ErrorCode": number;
    }>;
    /**
    * 查询一条蚂蚁区块链的交易统计信息
    */ DescribeAntChainTransactionStatistics(query: {
        /**
        * 地域ID
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 统计开始时间
        * @example `1563206400000`
        */ "Start": number;
        /**
        * 统计结束时间
        * @example `1563897600000`
        */ "End": number;
        /**
        * 区块链ID
        * @example `pYogqb9v`
        */ "AntChainId": string;
    }): Promise<{
        "code": string;
        "data": {
            "RequestId": string;
            "Result": {
                "Dt": string;
                "AntChainId": string;
                "CreatTime": number;
                "TransCount": number;
                "LastSumBlockHeight": number;
            }[];
        };
        "requestId": string;
        "successResponse": boolean;
    }>;
    /**
    * 查询一条蚂蚁区块链的账户列表
    */ DescribeAntChainAccounts(query: {
        /**
        * 地域ID
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 区块链ID
        * @example `pYogqb9v`
        */ "AntChainId": string;
        /**
        * 页面编号
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 每页数量
        * @example `10`
        */ "PageSize": number;
    }): Promise<{
        "code": string;
        "data": {
            "RequestId": string;
            "Result": {
                "Pagination": {
                    "TotalCount": number;
                    "PageSize": number;
                    "PageNumber": number;
                };
                "Accounts": {
                    "AccountStatus": string;
                    "Account": string;
                    "AntChainId": string;
                    "AccountRecoveryKey": string;
                    "AccountPublicKey": string;
                }[];
            };
        };
        "requestId": string;
        "successResponse": boolean;
    }>;
    /**
    * 调用JoinFabricChannel确认加入通道。
    */ JoinFabricChannel(query: {
        /**
        * 地域
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 操作
        * @example `accept`
        */ "Do": string;
        /**
        * 通道ID
        * @example `chan-channelx-1l1hmckuu****`
        */ "ChannelId": string;
        /**
        * 位置
        * @example `cn-hangzhou`
        */ "Location"?: string;
    }): Promise<{
        "Result": {
            "InviteTime": string;
            "ChannelId": string;
            "WithPeer": boolean;
            "ApproveTime": string;
            "ConfirmTime": string;
            "DestroyTime": string;
            "State": string;
            "OrganizationId": string;
            "AcceptTime": string;
        };
        "RequestId": string;
        "Success": boolean;
        "ErrorCode": number;
    }>;
    /**
    * 调用CreateFabricChaincode创建链码。
    */ CreateFabricChaincode(query: {
        /**
        * 地域
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 通道ID
        * @example `chan-first-channel-1w55v3u39x2xz`
        */ "ChannelId": string;
        /**
        * 联盟ID
        * @example `consortium-aaaaaa-akpcsjjac2jd`
        */ "ConsortiumId": string;
        /**
        * Oss桶地址
        * @example `https://chaincode.oss-cn-beijing.aliyuncs.com`
        */ "OssBucket": string;
        /**
        * Oss对象地址
        * @example `aaaaaa1/a0cf8729-7d47-44c9-9ed5-6d2fdfc8dc2c/sacc.cc`
        */ "OssUrl": string;
        /**
        * 组织ID
        * @example `peers-aaaaaa1-1oxw31d046jtl`
        */ "OrganizationId": string;
        /**
        * 背书策略
        * @example `OR ('aaaaaa1MSP.peer')`
        */ "EndorsePolicy"?: string;
        /**
        * 位置信息
        * @example `cn-hangzhou`
        */ "Location"?: string;
    }): Promise<{
        "Result": {
            "ChaincodeName": string;
            "ChannelId": string;
            "State": string;
            "ConsortiumId": string;
            "Creator": string;
            "CreateTime": number;
            "Install": string;
            "ChannelName": string;
            "ChaincodeVersion": string;
            "EndorsePolicy": string;
            "ChaincodeId": string;
        }[];
        "RequestId": string;
        "Success": boolean;
        "ErrorCode": number;
    }>;
    /**
    * 重置用户
    */ ResetAntChainUserCertificate(query: {
        /**
        * 地域ID
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 用户名
        * @example `uid-1287126353308684`
        */ "Username": string;
        /**
        * 区块链ID
        * @example `bDXK6boZ`
        */ "AntChainId": string;
    }): Promise<{
        "code": string;
        "data": {
            "RequestId": string;
            "Result": string;
        };
        "requestId": string;
        "successResponse": boolean;
    }>;
    /**
    * 删除一个合约工程的内容
    */ DeleteAntChainContractContent(query: {
        /**
        * 地域ID
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 文件ID
        * @example `GKX7KZX0`
        */ "ContentId": string;
    }): Promise<{
        "code": string;
        "data": {
            "RequestId": string;
            "Result": string;
        };
        "requestId": string;
        "successResponse": boolean;
    }>;
    /**
    * 更新一条蚂蚁区块链名字
    */ UpdateAntChain(query: {
        /**
        * 地域ID
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 区块链名称
        * @example `修改名称`
        */ "AntChainName": string;
        /**
        * 区块链ID
        * @example `pYogqb9v`
        */ "AntChainId": string;
    }): Promise<{
        "code": string;
        "data": {
            "RequestId": string;
            "Result": string;
        };
        "requestId": string;
        "successResponse": boolean;
    }>;
    /**
    * 查询一条蚂蚁区块链的基本信息
    */ DescribeAntChainInformation(query: {
        /**
        * 地域ID
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 区块链ID
        * @example `pYogqb9v`
        */ "AntChainId": string;
    }): Promise<{
        "code": string;
        "data": {
            "RequestId": string;
            "Result": {
                "AntChainId": string;
                "Version": string;
                "CreateTime": number;
                "AbnormalNodes": number;
                "Normal": boolean;
                "IsRole": boolean;
                "NodeNumber": number;
                "BlockHeight": number;
                "NodeInfos": {
                    "Status": boolean;
                    "Version": string;
                    "NodeName": string;
                    "BlockHeight": number;
                }[];
                "TransactionSum": number;
            };
        };
        "requestId": string;
        "successResponse": boolean;
    }>;
    /**
    * 更新联盟属性
    */ UpdateAntChainConsortium(query: {
        /**
        * 地域ID
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 联盟名称
        * @example `联盟名称`
        */ "ConsortiumName": string;
        /**
        * 联盟描述
        * @example `测试联盟`
        */ "ConsortiumDescription"?: string;
        /**
        * 联盟ID
        * @example `q0oWq92P`
        */ "ConsortiumId": string;
    }): Promise<{
        "code": string;
        "data": {
            "RequestId": string;
            "Result": string;
        };
        "requestId": string;
        "successResponse": boolean;
    }>;
    /**
    * 根据交易哈希查询一条蚂蚁区块链的交易信息
    */ DescribeAntChainTransaction(query: {
        /**
        * 地域ID
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 交易哈希
        * @example `b3b0d2db83d3e670449d1e2a39d1d13b7e0e6080b0f9c6945f79eca68d1dd2ca`
        */ "Hash": string;
        /**
        * 区块链ID
        * @example `pYogqb9v`
        */ "AntChainId": string;
    }): Promise<{
        "code": string;
        "data": {
            "RequestId": string;
            "Result": {
                "Transaction": {
                    "Nonce": string;
                    "Extentions": any[];
                    "TxType": string;
                    "Value": string;
                    "Gas": string;
                    "Period": number;
                    "To": string;
                    "From": string;
                    "Hash": string;
                    "Signatures": string[];
                    "Timestamp": number;
                };
                "CreateTime": number;
                "BlockVersion": number;
                "Hash": string;
                "BlockHeight": number;
            };
        };
        "requestId": string;
        "successResponse": boolean;
    }>;
    /**
    * 创建一个合约工程的内容，可以是文件或者文件夹
    */ CreateAntChainContractContent(query: {
        /**
        * 地域ID
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 新建文件/文件夹名称
        * @example `newFile`
        */ "ContentName": string;
        /**
        * 是否是文件夹
        * @example `false`
        */ "IsDirectory": boolean;
        /**
        * 上级目录ID
        * @example `R38DYDop`
        */ "ParentContentId"?: string;
        /**
        * 合约工程ID
        * @example `bDXK1b8Z`
        */ "ProjectId": string;
        /**
        * 新建文件/文件夹内容
        * @example `""`
        */ "Content"?: string;
    }): Promise<{
        "code": string;
        "data": {
            "RequestId": string;
            "Result": {
                "ContentName": string;
                "Content": string;
                "CreateTime": number;
                "UpdateTime": number;
                "ProjectId": string;
                "ParentContentId": string;
                "IsDirectory": boolean;
                "ContentId": string;
            };
        };
        "requestId": string;
        "successResponse": boolean;
    }>;
    /**
    * 获取一个合约工程的内容树
    */ DescribeAntChainContractProjectContentTree(query: {
        /**
        * 地域ID
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 项目ID
        * @example `2L9VK68g`
        */ "ProjectId": string;
    }): Promise<{
        "code": string;
        "data": {
            "RequestId": string;
            "Result": {
                "ProjectName": string;
                "ProjectVersion": string;
                "ProjectId": string;
                "Children": {
                    "gmtModified": number;
                    "children": {
                        "gmtModified": number;
                        "children": any[];
                        "name": string;
                        "id": string;
                        "gmtCreate": number;
                        "directory": boolean;
                        "projectId": string;
                        "content": string;
                        "parentId": string;
                    }[];
                    "name": string;
                    "id": string;
                    "gmtCreate": number;
                    "directory": boolean;
                    "projectId": string;
                }[];
                "ProjectDescription": string;
            };
        };
        "requestId": string;
        "successResponse": boolean;
    }>;
    /**
    * 获取一条蚂蚁区块链相关证书下载地址
    */ DescribeAntChainDownloadPaths(query: {
        /**
        * 地域ID
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 区块链ID
        * @example `1q8B5R9p`
        */ "AntChainId": string;
    }): Promise<{
        "code": string;
        "data": {
            "RequestId": string;
            "Result": {
                "SdkUrl": string;
                "TrustCaUrl": string;
                "CaCrtUrl": string;
                "ClientCrtUrl": string;
            };
        };
        "requestId": string;
        "successResponse": boolean;
    }>;
    /**
    * 在联盟内复制一个已有的合约工程
    */ CopyAntChainContractProject(query: {
        /**
        * 地域ID
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 工程名
        * @example `copyproject`
        */ "ProjectName": string;
        /**
        * 工程版本
        * @example `v1.0.1`
        */ "ProjectVersion": string;
        /**
        * 工程ID
        * @example `2L9VK68g`
        */ "ProjectId": string;
        /**
        * 工程描述
        * @example `copy project description`
        */ "ProjectDescription"?: string;
    }): Promise<{
        "code": string;
        "data": {
            "RequestId": string;
            "Result": {
                "ConsortiumId": string;
                "ProjectName": string;
                "CreateTime": number;
                "ProjectVersion": string;
                "UpdateTime": number;
                "ProjectId": string;
                "ProjectDescription": string;
            };
        };
        "requestId": string;
        "successResponse": boolean;
    }>;
    /**
    * 在联盟内创建一个合约工程
    */ CreateAntChainContractProject(query: {
        /**
        * 区域ID
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 项目名称
        * @example `projectname`
        */ "ProjectName": string;
        /**
        * 项目版本
        * @example `v1.0.0`
        */ "ProjectVersion": string;
        /**
        * 联盟ID
        * @example `DV80nJXq`
        */ "ConsortiumId": string;
        /**
        * 工程描述
        * @example `project description`
        */ "ProjectDescription"?: string;
    }): Promise<{
        "code": string;
        "data": {
            "RequestId": string;
            "Result": {
                "ConsortiumId": string;
                "ProjectName": string;
                "CreateTime": number;
                "ProjectVersion": string;
                "UpdateTime": number;
                "ProjectId": string;
                "ProjectDescription": string;
            };
        };
        "requestId": string;
        "successResponse": boolean;
    }>;
    /**
    * 查看联盟成员申请连接一条蚂蚁区块链的信息
    */ DescribeAntChainCertificateApplications(query: {
        /**
        * 地域ID
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 状态
        * @example `1`
        */ "Status": string;
        /**
        * 每页数量
        * @example `20`
        */ "PageSize": number;
        /**
        * 页面编号
        * @example `1`
        */ "PageNumber": number;
        /**
        * 区块链ID
        * @example `1q8B5R9p`
        */ "AntChainId": string;
    }): Promise<{
        "code": string;
        "data": {
            "RequestId": string;
            "Result": {
                "Pagination": {
                    "TotalCount": number;
                    "PageSize": number;
                    "PageNumber": number;
                };
                "CertificateApplications": {
                    "Status": number;
                    "AntChainId": string;
                    "Username": string;
                    "Createtime": number;
                    "Updatetime": number;
                    "Bid": string;
                }[];
            };
        };
        "requestId": string;
        "successResponse": boolean;
    }>;
    /**
    * 获取联盟成员列表
    */ DescribeAntChainMembers(query: {
        /**
        * 地域ID
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 联盟ID
        * @example `q0oWq92P`
        */ "ConsortiumId": string;
        /**
        * 页面编号
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 页面包含条例数
        * @example `10`
        */ "PageSize": number;
    }): Promise<{
        "code": string;
        "data": {
            "RequestId": string;
            "Result": {
                "Pagination": {
                    "TotalCount": number;
                    "PageSize": number;
                    "PageNumber": number;
                };
                "Members": {
                    "Status": string;
                    "Role": string;
                    "MemberId": string;
                    "JoinTime": number;
                    "MemberName": string;
                }[];
            };
        };
        "requestId": string;
        "successResponse": boolean;
    }>;
    /**
    * 创建联盟
    */ CreateAntChainConsortium(query: {
        /**
        * 地域ID
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 联盟描述
        * @example `联盟描述`
        */ "ConsortiumDescription"?: string;
        /**
        * 联盟名称
        * @example `联盟名称`
        */ "ConsortiumName": string;
    }): Promise<{
        "code": string;
        "data": {
            "RequestId": string;
            "Result": {
                "ConsortiumId": string;
            };
        };
        "requestId": string;
        "successResponse": boolean;
    }>;
    /**
    * 获取联盟内的蚂蚁区块链列表
    */ DescribeAntChains(query: {
        /**
        * 地域ID
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 联盟ID
        * @example `AroN3X2l`
        */ "ConsortiumId": string;
        /**
        * 当前页面编号
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 页面条例数
        * @example `20`
        */ "PageSize": number;
    }): Promise<{
        "code": string;
        "data": {
            "RequestId": string;
            "Result": {
                "Pagination": {
                    "TotalCount": number;
                    "PageSize": number;
                    "PageNumber": number;
                };
                "IsExist": boolean;
                "AntChains": {
                    "IsAdmin": boolean;
                    "AntChainId": string;
                    "AntChainName": string;
                    "TlsAlgo": string;
                    "NodeNum": number;
                    "CipherSuit": string;
                    "CreateTime": number;
                    "ResourceSize": string;
                    "Network": string;
                    "ChainType": string;
                    "MerkleTreeSuit": string;
                    "RegionId": string;
                    "MemberStatus": string;
                    "ExpireTime": number;
                }[];
            };
        };
        "requestId": string;
        "successResponse": boolean;
    }>;
    /**
    * 查询一条蚂蚁区块链最新的交易摘要列表
    */ DescribeAntChainLatestTransactionDigests(query: {
        /**
        * 地域ID
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 区块链ID
        * @example `pYogqb9v`
        */ "AntChainId": string;
    }): Promise<{
        "code": string;
        "data": {
            "RequestId": string;
            "Result": {
                "transactionV10Type": string;
                "createTime": number;
                "from": string;
                "to": string;
                "hash": string;
            }[];
        };
        "requestId": string;
        "successResponse": boolean;
    }>;
    /**
    * 冻结一个蚂蚁区块链上的账户
    */ FreezeAntChainAccount(query: {
        /**
        * 地域ID
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 账户名称
        * @example `accountname`
        */ "Account": string;
        /**
        * 区块链ID
        * @example `1q8B5R9p`
        */ "AntChainId": string;
    }): Promise<{
        "code": string;
        "data": {
            "RequestId": string;
            "Result": string;
        };
        "requestId": string;
        "successResponse": boolean;
    }>;
    /**
    * 在联盟内删除一个合约工程
    */ DeleteAntChainContractProject(query: {
        /**
        * 地域ID
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 项目ID
        * @example `AVXeKq8R`
        */ "ProjectId": string;
    }): Promise<{
        "code": string;
        "data": {
            "RequestId": string;
            "Result": string;
        };
        "requestId": string;
        "successResponse": boolean;
    }>;
    /**
    * 申请链接一条蚂蚁区块链，自动生成证书等连接信息
    */ ApplyAntChainCertificateWithKeyAutoCreation(query: {
        /**
        * 地域ID
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 联盟ID
        * @example `DV80nJXq`
        */ "ConsortiumId": string;
        /**
        * SSL密钥密码
        * @example `password`
        */ "Password": string;
        /**
        * 城市名（L）
        * @example `countryName`
        */ "CountryName": string;
        /**
        * 省名（ST）
        * @example `stateOrProvinceName`
        */ "StateOrProvinceName": string;
        /**
        * 国家名（C）
        * @example `localityName`
        */ "LocalityName": string;
        /**
        * 机构名（O）
        * @example `organizationName  `
        */ "OrganizationName": string;
        /**
        * 组织单位名（OU）
        * @example `organizationUnitName  `
        */ "OrganizationUnitName": string;
        /**
        * 通用名称（CN）
        * @example `commonName`
        */ "CommonName": string;
        /**
        * 区块链ID
        * @example `1q8B5R9p`
        */ "AntChainId": string;
    }): Promise<{
        "code": string;
        "data": {
            "RequestId": string;
            "Result": {
                "PrivateKey": string;
                "DownloadPath": {
                    "SdkUrl": string;
                    "TrustCaUrl": string;
                    "CaCrtUrl": string;
                    "ClientCrtUrl": string;
                };
            };
        };
        "requestId": string;
        "successResponse": boolean;
    }>;
    /**
    * 在一条蚂蚁区块链上创建一个账户
    */ CreateAntChainAccount(query: {
        /**
        * 地域ID
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 账号名
        * @example `test`
        */ "Account": string;
        /**
        * 账户公钥
        * @example `AEDC32...`
        */ "AccountPubKey": string;
        /**
        * 账户恢复公钥
        * @example `AEDC32...`
        */ "AccountRecoverPubKey": string;
        /**
        * 区块链ID
        * @example `bDXK6boZ`
        */ "AntChainId": string;
    }): Promise<{
        "code": string;
        "data": {
            "RequestId": string;
            "Result": {
                "Account": string;
                "AntChainId": string;
            };
        };
        "requestId": string;
        "successResponse": boolean;
    }>;
    /**
    * 根据块高查询一条蚂蚁区块链的区块信息
    */ DescribeAntChainBlock(query: {
        /**
        * 地域ID
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 查询区块高度
        * @example `1234`
        */ "Height": number;
        /**
        * 区块链ID
        * @example `pYogqb9v`
        */ "AntChainId": string;
    }): Promise<{
        "code": string;
        "data": {
            "RequestId": string;
            "Result": {
                "AntChainId": string;
                "Version": number;
                "TransactionSize": number;
                "BlockHash": string;
                "CreateTime": number;
                "PreviousHash": string;
                "Height": number;
                "TransSummaryList": any[];
                "RootTxHash": string;
            };
        };
        "requestId": string;
        "successResponse": boolean;
    }>;
    /**
    * 在一条蚂蚁区块链上创建一个账户，通过自动生成keypair 的方式
    */ CreateAntChainAccountWithKeyPairAutoCreation(query: {
        /**
        * 地域ID
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 账户名称
        * @example `accountname`
        */ "Account": string;
        /**
        * 密码
        * @example `password`
        */ "Password": string;
        "RecoverPassword": string;
        /**
        * 区块链ID
        * @example `1q8B5R9p`
        */ "AntChainId": string;
    }): Promise<{
        "code": string;
        "data": {
            "RequestId": string;
            "Result": {
                "Account": string;
                "AntChainId": string;
                "AccountRecoverPrivateKey": string;
                "AccountRecoverPublicKey": string;
                "AccountPrivateKey": string;
                "AccountPublicKey": string;
            };
        };
        "requestId": string;
        "successResponse": boolean;
    }>;
    /**
    * 查询一条蚂蚁区块链最新的区块信息列表
    */ DescribeAntChainLatestBlocks(query: {
        /**
        * 地区ID
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 区块链ID
        * @example `pYogqb9v`
        */ "AntChainId": string;
    }): Promise<{
        "code": string;
        "data": {
            "RequestId": string;
            "Result": {
                "blockHash": string;
                "previousHash": string;
                "size": number;
                "createTime": number;
                "transactionSize": number;
                "alias": string;
                "bizData": string;
                "version": number;
                "rootTxHash": string;
                "height": number;
            }[];
        };
        "requestId": string;
        "successResponse": boolean;
    }>;
    /**
    * 解冻一个蚂蚁区块链上的账户
    */ UnfreezeAntChainAccount(query: {
        /**
        * 地域ID
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 账户名
        * @example `accountname`
        */ "Account": string;
        /**
        * 区块链ID
        * @example `1q8B5R9p`
        */ "AntChainId": string;
    }): Promise<{
        "code": string;
        "data": {
            "RequestId": string;
            "Result": string;
        };
        "requestId": string;
        "successResponse": boolean;
    }>;
    /**
    * 调用ConfirmFabricConsortiumMember确认联盟成员的加入申请，需要确认提案。
    */ ConfirmFabricConsortiumMember(query: {
        /**
        * 地域。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        "Organization": string[];
        /**
        * 联盟ID。
        * @example `consortium-aaaaaa-akpcsjjac2jd`
        */ "ConsortiumId": string;
    }): Promise<{
        "Result": string;
        "RequestId": string;
        "Success": string;
        "ErrorCode": string;
    }>;
    /**
    * 获取联盟内合约工程的列表
    */ DescribeAntChainContractProjects(query: {
        /**
        * 地域ID
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 每页数量
        * @example `10`
        */ "PageSize": number;
        /**
        * 页面编号
        * @example `1`
        */ "PageNumber": number;
        /**
        * 联盟ID
        * @example `DV80nJXq`
        */ "ConsortiumId": string;
    }): Promise<{
        "code": string;
        "data": {
            "RequestId": string;
            "Result": {
                "Pagination": {
                    "TotalCount": number;
                    "PageSize": number;
                    "PageNumber": number;
                };
                "ContractProjects": {
                    "ConsortiumId": string;
                    "ProjectName": string;
                    "CreateTime": number;
                    "ProjectVersion": string;
                    "UpdateTime": number;
                    "ProjectId": string;
                    "ProjectDescription": string;
                }[];
            };
        };
        "requestId": string;
        "successResponse": boolean;
    }>;
    /**
    * 获取联盟列表
    */ DescribeAntChainConsortiums(query: {
        /**
        * 地域ID
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 页面编号
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 每页显示条例数
        * @example `10`
        */ "PageSize": number;
    }): Promise<{
        "code": string;
        "data": {
            "RequestId": string;
            "Result": {
                "Pagination": {
                    "TotalCount": number;
                    "PageSize": number;
                    "PageNumber": number;
                };
                "AntConsortiums": {
                    "Status": string;
                    "Role": string;
                    "ConsortiumId": string;
                    "ChainNum": number;
                    "CreateTime": number;
                    "ConsortiumDescription": string;
                    "ConsortiumName": string;
                    "MemberNum": number;
                }[];
            };
        };
        "requestId": string;
        "successResponse": boolean;
    }>;
    /**
    * 更新一个合约工程的内容
    */ UpdateAntChainContractContent(query: {
        /**
        * 地域ID
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 上级目录ID
        * @example `R38DYDop`
        */ "ParentContentId"?: string;
        /**
        * 文件ID
        * @example `R6XMn59e`
        */ "ContentId": string;
        /**
        * 更新文件/文件夹名称
        * @example `newFile`
        */ "ContentName"?: string;
        /**
        * 文件内容
        * @example `update content`
        */ "Content"?: string;
    }): Promise<{
        "code": string;
        "data": {
            "RequestId": string;
            "Result": string;
        };
        "requestId": string;
        "successResponse": boolean;
    }>;
    /**
    * 删除联盟
    */ DeleteAntChainConsortium(query: {
        /**
        * 地域ID
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 联盟ID
        * @example `q0oWq92P`
        */ "ConsortiumId": string;
    }): Promise<{
        "code": string;
        "data": {
            "RequestId": string;
            "Result": string;
        };
        "requestId": string;
        "successResponse": boolean;
    }>;
    /**
    * 调用DescribeFabricCandidateOrganizations查询接收邀请的候选组织。
    */ DescribeFabricCandidateOrganizations(query: {
        /**
        * 地域
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 位置
        * @example `cn-hangzhou`
        */ "Location"?: string;
    }): Promise<{
        "Result": {
            "ClusterState": string;
            "OrganizationId": string;
            "ServiceState": string;
            "OrganizationName": string;
        }[];
        "RequestId": string;
        "Success": boolean;
        "ErrorCode": number;
    }>;
    /**
    * 申请链接一条蚂蚁区块链，上传tls证书请求
    */ ApplyAntChainCertificate(query: {
        /**
        * 地域ID
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 上传内容
        * @example `LS0tLS1...`
        */ "UploadReq": string;
        /**
        * 区块链ID
        * @example `bDXK6boZ`
        */ "AntChainId": string;
    }): Promise<{
        "code": string;
        "data": {
            "RequestId": string;
            "Result": string;
        };
        "requestId": string;
        "successResponse": boolean;
    }>;
    /**
    * 调用DescribeFabricInvitationCode获取邀请链接。
    */ DescribeFabricInvitationCode(query: {
        /**
        * 地域
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 联盟ID
        * @example `consortium-lianmenyumingyi-hc5d1bwl****`
        */ "ConsortiumId": string;
    }): Promise<{
        "Result": {
            "Url": string;
            "ExpireTime": string;
            "Accepted": string;
            "Code": string;
            "ConsortiumId": string;
            "Email": string;
            "InvitationId": number;
            "SendTime": string;
            "SenderId": number;
            "SenderBid": string;
            "SenderName": string;
        };
        "RequestId": string;
        "Success": boolean;
        "ErrorCode": number;
    }>;
    /**
    * 调用CreateFabricOrganization创建组织。
    */ CreateFabricOrganization(query: {
        /**
        * 地域
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 区域
        * @example `cn-hangzhou`
        */ "Location": string;
        /**
        * 域名
        * @example `domain`
        */ "Domain": string;
        /**
        * 规格名
        * @example `basic`
        */ "SpecName": string;
        /**
        * 名称
        * @example `name`
        */ "OrganizationName": string;
        /**
        * 描述
        * @example `description`
        */ "Description"?: string;
        /**
        * 节点数据量
        * @example `2`
        */ "PeersCount"?: number;
        /**
        * 计费周期
        * @example `12`
        */ "PaymentDuration"?: number;
        /**
        * 周期单位
        * @example `2`
        */ "PaymentDurationUnit"?: string;
    }): Promise<{
        "result": {
            "CodeName": string;
            "ClusterState": string;
            "OrganizationId": string;
            "CreateTime": string;
            "OwnerBid": number;
            "OrganizationName": string;
            "SpecName": string;
            "ConsortiumCount": number;
            "PeerCount": number;
            "Description": string;
            "Domain": string;
            "UserCount": number;
            "ServiceState": string;
        };
        "RequestId": string;
        "ErrorCode": number;
        "Success": boolean;
    }>;
    /**
    * 调用DescribeFabricConsortiumMembers获取联盟的组织信息。
    */ DescribeFabricConsortiumMembers(query: {
        /**
        * 地域
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 联盟ID
        * @example `consortium-lianmenyumingyi-hc5d1bwl****`
        */ "ConsortiumId": string;
        /**
        * 位置
        * @example `cn-hangzhou`
        */ "Location"?: string;
    }): Promise<{
        "Result": {
            "OrganizationName": string;
            "Description": string;
            "Domain": string;
            "JoinedTime": string;
            "ConsortiumId": string;
            "OrganizationId": string;
        }[];
        "RequestId": string;
        "Success": boolean;
        "ErrorCode": number;
    }>;
    /**
    * 调用CreateFabricChannel创建通道。
    */ CreateFabricChannel(query: {
        /**
        * 地域。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 通道名。最大长度50个字符，可以包含英文或数字及符号"_", "-", "."。
        * @example `channelx`
        */ "ChannelName": string;
        "Organization": string[];
        /**
        * 联盟ID。
        * @example `consortium-aaaaaa-akpcsjjac2jd`
        */ "ConsortiumId": string;
        /**
        * 块超时时间。
        * @example `2`
        */ "BatchTimeout"?: number;
        /**
        * 块交易上限。
        * @example `50`
        */ "MaxMessageCount"?: number;
        /**
        * 块大小软限制。
        * @example `12`
        */ "PreferredMaxBytes"?: number;
    }): Promise<{
        "Result": {
            "ChannelId": string;
            "ConsortiumName": string;
            "ChannelName": string;
            "ConsortiumId": string;
            "CreateTime": string;
            "MaxMessageCount": number;
            "MemberCount": number;
            "OwnerBid": string;
            "OwnerUid": string;
            "OwnerName": string;
            "PreferredMaxBytes": number;
            "State": string;
            "SupportConfig": string;
            "UpdateTime": string;
        }[];
        "RequestId": string;
        "Success": boolean;
        "ErrorCode": number;
    }>;
    /**
    * 调用InstantiateFabricChaincode实例化链码。
    */ InstantiateFabricChaincode(query: {
        /**
        * 地域
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 链码ID
        * @example `cc-198jejf8f8****`
        */ "ChaincodeId": string;
        /**
        * 组织ID
        * @example `peers-aaaaaa2-1eqnj5o5w****`
        */ "OrganizationId": string;
        /**
        * 背书策略
        * @example `OR (&#39;perf9141MSP.member&#39;)`
        */ "EndorsePolicy"?: string;
        /**
        * 位置
        * @example `cn-hangzhou`
        */ "Location"?: string;
        /**
        * 隐私数据集配置
        * @example `[{"requiredPeerCount":0,"name":"collectionName","maxPeerCount":3,"blockToLive":0,"policy":"OR('Org1MSP.peer')"}]`
        */ "CollectionConfig"?: string;
    }): Promise<{
        "Result": {
            "install": boolean;
            "channelName": string;
            "input": string;
            "ChaincodeName": string;
            "Path": string;
            "state": string;
            "chaincodeId": string;
            "type": number;
            "ChaincodeVersion": string;
            "ConsortiumId": string;
            "CreateTime": string;
            "EndorsePolicy": string;
            "Message": string;
        };
        "RequestId": string;
        "Success": boolean;
        "ErrorCode": number;
    }>;
    /**
    * 调用CreateFabricOrganizationUser创建组织用户。
    */ CreateFabricOrganizationUser(query: {
        /**
        * 地域
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 用户名
        * @example `username`
        */ "Username": string;
        /**
        * 组织ID
        * @example `peers-yidio-1tuigx42b****`
        */ "OrganizationId": string;
        /**
        * 密码
        * @example `password`
        */ "Password"?: string;
        /**
        * ABAC属性
        * @example `foo=foo1,bar=bar1`
        */ "Attrs"?: string;
    }): Promise<{
        "result": {
            "OrganizationId": string;
            "CreateTime": string;
            "ExpireTime": string;
            "Fullname": string;
            "Username": string;
            "Password": string;
        };
        "RequestId": string;
        "ErrorCode": number;
        "Success": boolean;
    }>;
    /**
    * 调用DescribeFabricOrganizationSpecs查询组织的规格列表。
    */ DescribeFabricOrganizationSpecs(query: {
        /**
        * 地域
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
    }): Promise<{
        "Result": {
            "OrganizationSpecsName": string;
            "Enable": boolean;
            "Title": string;
        }[];
        "RequestId": string;
        "Success": boolean;
        "ErrorCode": number;
    }>;
    /**
    * 调用UpgradeFabricChaincode升级链码。
    */ UpgradeFabricChaincode(query: {
        /**
        * 地域
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 链码ID
        * @example `code-sacc-fk9z4r97****`
        */ "ChaincodeId": string;
        /**
        * 组织ID
        * @example `peers-wholesaler-15ix77tof****`
        */ "OrganizationId": string;
        /**
        * 背书策略
        * @example `OR ("wholesalerMSP.peer")`
        */ "EndorsePolicy"?: string;
        /**
        * 位置
        * @example `cn-hangzhou`
        */ "Location"?: string;
        /**
        * 隐私数据集配置
        * @example `[{"requiredPeerCount":0,"name":"collectionName","maxPeerCount":3,"blockToLive":0,"policy":"OR('Org1MSP.peer')"}]`
        */ "CollectionConfig"?: string;
    }): Promise<{
        "Result": {
            "ProviderId": string;
            "ProviderName": string;
            "ChaincodeName": string;
            "Input": string;
            "Install": boolean;
            "State": string;
            "Type": number;
            "ChannelName": string;
            "ConsortiumId": string;
            "ChaincodeVersion": string;
            "ChaincodeId": string;
            "Path": string;
        };
        "RequestId": string;
        "Success": boolean;
        "ErrorCode": number;
    }>;
    /**
    * 调用DescribeFabricOrganizationUsers获取组织的用户列表。
    */ DescribeFabricOrganizationUsers(query: {
        /**
        * 地域
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 组织ID
        * @example `peers-aaaaaa2-1eqnj5o5w****`
        */ "OrganizationId": string;
        /**
        * 位置
        * @example `cn-hangzhou`
        */ "Location"?: string;
    }): Promise<{
        "result": {
            "Attrs": string;
            "Username": string;
            "OrganizationId": string;
            "ChannelName": string;
            "CreateTime": string;
            "ExpireTime": string;
            "CallerBid": string;
            "CallerUid": number;
        };
        "RequestId": string;
        "ErrorCode": number;
        "Success": boolean;
    }>;
    /**
    * 调用DescribeFabricConsortiumChannels获取联盟的通道列表。
    */ DescribeFabricConsortiumChannels(query: {
        /**
        * 地域
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 联盟ID
        * @example `consortium-lianmenyumingyi-hc5d1bwlulg7`
        */ "ConsortiumId": string;
        /**
        * 位置
        * @example `cn-hangzhou`
        */ "Location"?: string;
    }): Promise<{
        "result": {
            "BatchTimeout": number;
            "BlockCount": number;
            "ChaincodeCount": number;
            "ChannelId": string;
            "ChannelName": string;
            "ConsortiumId": string;
            "ConsortiumName": string;
            "CreateTime": string;
            "DeleteTime": string;
            "Deleted": string;
            "OwnerBid": string;
            "OwnerUid": number;
            "PreferredMaxBytes": number;
            "State": string;
            "SupportChannelConfig": string;
            "UpdateTime": string;
        };
        "RequestId": string;
        "ErrorCode": number;
        "Success": boolean;
    }>;
    /**
    * 调用CreateFabricConsortium创建联盟。
    */ CreateFabricConsortium(query: {
        /**
        * 地域
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * Orderer类型
        * @example `Kafka`
        */ "OrdererType": string;
        /**
        * 联盟名
        * @example `aaaaa`
        */ "ConsortiumName": string;
        /**
        * 域名
        * @example `helloworld`
        */ "Domain": string;
        /**
        * 创建通道策略
        * @example `Any`
        */ "ChannelPolicy": string;
        /**
        * 规格
        * @example `basic`
        */ "SpecName": string;
        /**
        * 位置信息
        * @example `cn-hangzhou`
        */ "Location": string;
        /**
        * 区域
        * @example `random`
        */ "ZoneId"?: string;
        /**
        * 联盟描述
        * @example `some`
        */ "ConsortiumDescription"?: string;
        /**
        * Orderer数量
        * @example `2`
        */ "OrderersCount"?: number;
        /**
        * Peer数量
        * @example `2`
        */ "PeersCount"?: number;
        "Organization"?: string[];
        /**
        * 周期单位
        * @example `month`
        */ "PaymentDurationUnit"?: string;
        /**
        * 计费周期
        * @example `2`
        */ "PaymentDuration"?: number;
    }): Promise<{
        "result": {
            "CodeName": string;
            "ClusterState": string;
            "ConsortiumId": string;
            "CreateTime": string;
            "OwnerBid": number;
            "OrdererCount": number;
            "OrdererType": string;
            "ConsortiumName": string;
            "OrganizationCount": number;
            "ChannelCount": number;
            "ChannelPolicy": string;
            "Description": string;
            "Domain": string;
            "MemberCount": number;
            "ServiceState": string;
        };
        "RequestId": string;
        "ErrorCode": number;
        "Success": boolean;
    }>;
    /**
    * 调用DescribeFabricConsortiumOrderers获取联盟的Orderer列表。
    */ DescribeFabricConsortiumOrderers(query: {
        /**
        * 地域
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 联盟ID
        * @example `consortium-aaaaaa-akpcsjjac2jd	`
        */ "ConsortiumId": string;
        /**
        * 位置
        * @example `cn-hangzhou`
        */ "Location"?: string;
    }): Promise<{
        "Result": {
            "OrdererName": string;
            "Port": number;
            "Domain": string;
            "CreateTime": string;
            "UpdateTime": string;
            "InstanceType": string;
        }[];
        "RequestId": string;
        "Success": boolean;
        "ErrorCode": number;
    }>;
    /**
    * 调用DescribeFabricOrganization获取一个组织的详情。
    */ DescribeFabricOrganization(query: {
        /**
        * 地域
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 组织ID
        * @example `peers-aaaaaa2-1eqnj5o5w****`
        */ "OrganizationId": string;
        /**
        * 位置
        * @example `cn-hangzhou`
        */ "Location"?: string;
    }): Promise<{
        "Result": {
            "OrganizationDescription": string;
            "Domain": string;
            "ZoneId": string;
            "OrganizationId": string;
            "OrganizationName": string;
            "ConsortiumCount": number;
            "UserCount": number;
            "State": string;
            "SpecName": string;
            "OwnerUid": number;
            "CAUrl": string;
            "CreateTime": string;
            "CANAME": string;
            "CodeName": string;
            "OwnerName": string;
            "PeerCount": number;
            "OwnerBid": string;
        };
        "RequestId": string;
        "Success": boolean;
        "ErrorCode": number;
    }>;
    /**
    * 调用DescribeFabricConsortiumSpecs查询联盟的规格列表。
    */ DescribeFabricConsortiumSpecs(query: {
        /**
        * 地域
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
    }): Promise<{
        "Result": {
            "Name": string;
            "NumOfNodes": number;
            "WorkerDescription": string;
            "Enable": boolean;
            "MasterDescription": string;
            "Title": string;
        }[];
        "RequestId": string;
        "Success": boolean;
        "ErrorCode": number;
    }>;
    /**
    * 调用DescribeFabricConsortiumConfig获取“创建联盟”的参数可选值。
    */ DescribeFabricConsortiumConfig(query: {
        /**
        * 地域。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
    }): Promise<{
        "Result": {
            "OrdererType": string[];
            "ChannelPolicy": string[];
        };
        "RequestId": string;
        "Success": boolean;
        "ErrorCode": number;
    }>;
    /**
    * 更新联盟成员属性
    */ UpdateAntChainMember(query: {
        /**
        * 地域ID
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 联盟ID
        * @example `AroN3X2l`
        */ "ConsortiumId": string;
        /**
        * 成员ID
        * @example `1287126353301234`
        */ "MemberId": string;
        /**
        * 成员名称
        * @example `updatename`
        */ "MemberName": string;
    }): Promise<{
        "code": string;
        "data": {
            "RequestId": string;
            "Result": string;
        };
        "requestId": string;
        "successResponse": boolean;
    }>;
    DescribeFabricOrdererLogs(query: {
        "RegionId"?: string;
        "OrdererName": string;
        "ConsortiumId": string;
        "Lines"?: string;
    }): Promise<{}>;
    DescribeEthereumDeletable(query: {
        "RegionId"?: string;
        "EthereumId": string;
    }): Promise<{}>;
    DescribeFabricExplorer(query: {
        "RegionId"?: string;
        "ExMethod": string;
        "OrganizationId": string;
        "ExUrl"?: string;
        "ExBody"?: string;
    }): Promise<{}>;
    DescribeFabricPeerLogs(query: {
        "RegionId"?: string;
        "PeerName": string;
        "OrganizationId": string;
        "Lines"?: string;
    }): Promise<{}>;
}
export default BAAS;
