import { DescribeUisConnectionsRequest } from "./DescribeUisConnections/req";
import { DescribeUisConnectionsResponse } from "./DescribeUisConnections/res";
import { CreateUisRequest } from "./CreateUis/req";
import { CreateUisResponse } from "./CreateUis/res";
import { ModifyUisConnectionAttributeRequest } from "./ModifyUisConnectionAttribute/req";
import { ModifyUisConnectionAttributeResponse } from "./ModifyUisConnectionAttribute/res";
import { CreateUisConnectionRequest } from "./CreateUisConnection/req";
import { CreateUisConnectionResponse } from "./CreateUisConnection/res";
import { DeleteUisRequest } from "./DeleteUis/req";
import { DeleteUisResponse } from "./DeleteUis/res";
import { DeleteSubConnectionRequest } from "./DeleteSubConnection/req";
import { DeleteSubConnectionResponse } from "./DeleteSubConnection/res";
import { DeleteDnatEntryRequest } from "./DeleteDnatEntry/req";
import { DeleteDnatEntryResponse } from "./DeleteDnatEntry/res";
import { ModifyUisAttributeRequest } from "./ModifyUisAttribute/req";
import { ModifyUisAttributeResponse } from "./ModifyUisAttribute/res";
import { DescribeHighPriorityIpsRequest } from "./DescribeHighPriorityIps/req";
import { DescribeHighPriorityIpsResponse } from "./DescribeHighPriorityIps/res";
import { CreateSubConnectionRequest } from "./CreateSubConnection/req";
import { CreateSubConnectionResponse } from "./CreateSubConnection/res";
import { DescribeUisesRequest } from "./DescribeUises/req";
import { DescribeUisesResponse } from "./DescribeUises/res";
import { ModifySubConnectionRequest } from "./ModifySubConnection/req";
import { ModifySubConnectionResponse } from "./ModifySubConnection/res";
import { DescribeUiseNodeStatusRequest } from "./DescribeUiseNodeStatus/req";
import { DescribeUiseNodeStatusResponse } from "./DescribeUiseNodeStatus/res";
import { ModifyHighPriorityIpRequest } from "./ModifyHighPriorityIp/req";
import { ModifyHighPriorityIpResponse } from "./ModifyHighPriorityIp/res";
import { DescribeSubConnectionRequest } from "./DescribeSubConnection/req";
import { DescribeSubConnectionResponse } from "./DescribeSubConnection/res";
import { GetDroppedIpListRequest } from "./GetDroppedIpList/req";
import { GetDroppedIpListResponse } from "./GetDroppedIpList/res";
import { ModifyWhiteListRequest } from "./ModifyWhiteList/req";
import { ModifyWhiteListResponse } from "./ModifyWhiteList/res";
import { DescribeSubConnectionsRequest } from "./DescribeSubConnections/req";
import { DescribeSubConnectionsResponse } from "./DescribeSubConnections/res";
import { AddUisNodeIpRequest } from "./AddUisNodeIp/req";
import { AddUisNodeIpResponse } from "./AddUisNodeIp/res";
import { DeleteUisConnectionRequest } from "./DeleteUisConnection/req";
import { DeleteUisConnectionResponse } from "./DeleteUisConnection/res";
import { DescribeWhiteListRequest } from "./DescribeWhiteList/req";
import { DescribeWhiteListResponse } from "./DescribeWhiteList/res";
import { ModifyUisNodeAttributeRequest } from "./ModifyUisNodeAttribute/req";
import { ModifyUisNodeAttributeResponse } from "./ModifyUisNodeAttribute/res";
import { DeleteUisNodeRequest } from "./DeleteUisNode/req";
import { DeleteUisNodeResponse } from "./DeleteUisNode/res";
import { DescribeHighPriorityIpRequest } from "./DescribeHighPriorityIp/req";
import { DescribeHighPriorityIpResponse } from "./DescribeHighPriorityIp/res";
import { DeleteHighPriorityIpRequest } from "./DeleteHighPriorityIp/req";
import { DeleteHighPriorityIpResponse } from "./DeleteHighPriorityIp/res";
import { CreateUisNodeRequest } from "./CreateUisNode/req";
import { CreateUisNodeResponse } from "./CreateUisNode/res";
import { DescribeUisNodesRequest } from "./DescribeUisNodes/req";
import { DescribeUisNodesResponse } from "./DescribeUisNodes/res";
import { ModifyDnatEntryRequest } from "./ModifyDnatEntry/req";
import { ModifyDnatEntryResponse } from "./ModifyDnatEntry/res";
import { DeleteUisNetworkInterfaceRequest } from "./DeleteUisNetworkInterface/req";
import { DeleteUisNetworkInterfaceResponse } from "./DeleteUisNetworkInterface/res";
import { AddHighPriorityIpRequest } from "./AddHighPriorityIp/req";
import { AddHighPriorityIpResponse } from "./AddHighPriorityIp/res";
import { DescribeDnatEntriesRequest } from "./DescribeDnatEntries/req";
import { DescribeDnatEntriesResponse } from "./DescribeDnatEntries/res";
import { DescribeUisNetworkInterfacesRequest } from "./DescribeUisNetworkInterfaces/req";
import { DescribeUisNetworkInterfacesResponse } from "./DescribeUisNetworkInterfaces/res";
import { DescribeAreasRequest } from "./DescribeAreas/req";
import { DescribeAreasResponse } from "./DescribeAreas/res";
import { DeleteUisNodeIpRequest } from "./DeleteUisNodeIp/req";
import { DeleteUisNodeIpResponse } from "./DeleteUisNodeIp/res";
import { CreateUisNetworkInterfaceRequest } from "./CreateUisNetworkInterface/req";
import { CreateUisNetworkInterfaceResponse } from "./CreateUisNetworkInterface/res";
import { CreateDnatEntryRequest } from "./CreateDnatEntry/req";
import { CreateDnatEntryResponse } from "./CreateDnatEntry/res";
import { DescribeRegionsRequest } from "./DescribeRegions/req";
import { DescribeRegionsResponse } from "./DescribeRegions/res";

interface UIS {
    /**
    * 调用DescribeUisConnections接口查看已创建的隧道连接信息。
    */ DescribeUisConnections(query: DescribeUisConnectionsRequest): Promise<DescribeUisConnectionsResponse>;
    /**
    * 调用CreateUis接口创建一个Uis实例。实例创建后会指定隧道协议，并生成VPN数据库的管理口令。
    */ CreateUis(query: CreateUisRequest): Promise<CreateUisResponse>;
    /**
    * 调用ModifyUisConnectionAttribute接口修改隧道连接的配置信息。
    */ ModifyUisConnectionAttribute(query: ModifyUisConnectionAttributeRequest): Promise<ModifyUisConnectionAttributeResponse>;
    /**
    * 调用CreateUisConnection接口创建隧道连接。
    */ CreateUisConnection(query: CreateUisConnectionRequest): Promise<CreateUisConnectionResponse>;
    /**
    * 调用DeleteUis接口删除已创建的实例。
    */ DeleteUis(query: DeleteUisRequest): Promise<DeleteUisResponse>;
    /**
    * 调用DeleteSubConnection接口删除GRE的连接。
    */ DeleteSubConnection(query: DeleteSubConnectionRequest): Promise<DeleteSubConnectionResponse>;
    /**
    * 调用DeleteDnatEntry接口删除DNAT规则。
    */ DeleteDnatEntry(query: DeleteDnatEntryRequest): Promise<DeleteDnatEntryResponse>;
    /**
    * 调用ModifyUisAttribute接口修改已创建的实例的配置。
    */ ModifyUisAttribute(query: ModifyUisAttributeRequest): Promise<ModifyUisAttributeResponse>;
    /**
    * 调用DescribeHighPriorityIps接口查询uis实例中的目的地址（ip或者URL）列表。
    */ DescribeHighPriorityIps(query: DescribeHighPriorityIpsRequest): Promise<DescribeHighPriorityIpsResponse>;
    /**
    * 调用CreateSubConnection接口创建GRE连接。
    */ CreateSubConnection(query: CreateSubConnectionRequest): Promise<CreateSubConnectionResponse>;
    /**
    * 调用DescribeUises接口查询已创建的实例。
    */ DescribeUises(query: DescribeUisesRequest): Promise<DescribeUisesResponse>;
    /**
    * 调用ModifySubConnection接口修改GRE的连接信息。
    */ ModifySubConnection(query: ModifySubConnectionRequest): Promise<ModifySubConnectionResponse>;
    /**
    * 调用DescribeUiseNodeStatus接口查询UIS节点的状态信息。
    */ DescribeUiseNodeStatus(query: DescribeUiseNodeStatusRequest): Promise<DescribeUiseNodeStatusResponse>;
    /**
    * 调用ModifyHighPriorityIp接口修改指定实例的地址列表信息。可以用来修改路由的节点信息。
    */ ModifyHighPriorityIp(query: ModifyHighPriorityIpRequest): Promise<ModifyHighPriorityIpResponse>;
    /**
    * 调用DescribeSubConnection接口查询GRE的连接详情。
    */ DescribeSubConnection(query: DescribeSubConnectionRequest): Promise<DescribeSubConnectionResponse>;
    /**
    * 调用GetDroppedIpList接口查询报文丢失的IP列表。
    */ GetDroppedIpList(query: GetDroppedIpListRequest): Promise<GetDroppedIpListResponse>;
    /**
    * 调用ModifyWhiteList接口修改访问认证数据库的白名单。
    */ ModifyWhiteList(query: ModifyWhiteListRequest): Promise<ModifyWhiteListResponse>;
    /**
    * 调用DescribeSubConnections接口查询GRE的连接。
    */ DescribeSubConnections(query: DescribeSubConnectionsRequest): Promise<DescribeSubConnectionsResponse>;
    /**
    * 调用AddUisNodeIp接口为UisNode增加IP。
    */ AddUisNodeIp(query: AddUisNodeIpRequest): Promise<AddUisNodeIpResponse>;
    /**
    * 调用DeleteUisConnection接口删除隧道连接。
    */ DeleteUisConnection(query: DeleteUisConnectionRequest): Promise<DeleteUisConnectionResponse>;
    /**
    * 调用DescribeWhiteList接口查询访问认证数据库的白名单。
    */ DescribeWhiteList(query: DescribeWhiteListRequest): Promise<DescribeWhiteListResponse>;
    /**
    * 调用ModifyUisNodeAttribute接口修改已创建的节点实例配置。
    */ ModifyUisNodeAttribute(query: ModifyUisNodeAttributeRequest): Promise<ModifyUisNodeAttributeResponse>;
    /**
    * 调用DeleteUisNode接口删除节点实例。
    */ DeleteUisNode(query: DeleteUisNodeRequest): Promise<DeleteUisNodeResponse>;
    /**
    * 调用DescribeHighPriorityIp接口查询指定的实例中目标IP地址或域名列表，并返回指定地址的节点信息。
    */ DescribeHighPriorityIp(query: DescribeHighPriorityIpRequest): Promise<DescribeHighPriorityIpResponse>;
    /**
    * 调用DeleteHighPriorityIp接口删除指定实例的HighPriorityIp地址列表信息。
    */ DeleteHighPriorityIp(query: DeleteHighPriorityIpRequest): Promise<DeleteHighPriorityIpResponse>;
    /**
    * 调用CreateUisNode接口为已创建的实例添加节点实例。
    */ CreateUisNode(query: CreateUisNodeRequest): Promise<CreateUisNodeResponse>;
    /**
    * 调用DescribeUisNodes接口查询已创建的节点实例。
    */ DescribeUisNodes(query: DescribeUisNodesRequest): Promise<DescribeUisNodesResponse>;
    /**
    * ModifyDnatEntry
    */ ModifyDnatEntry(query: ModifyDnatEntryRequest): Promise<ModifyDnatEntryResponse>;
    /**
    * DeleteUisNetworkInterface
    */ DeleteUisNetworkInterface(query: DeleteUisNetworkInterfaceRequest): Promise<DeleteUisNetworkInterfaceResponse>;
    /**
    * 调用AddHighPriorityIp接口向List中批量添加IP地址或URL。
    */ AddHighPriorityIp(query: AddHighPriorityIpRequest): Promise<AddHighPriorityIpResponse>;
    /**
    * DescribeDnatEntries
    */ DescribeDnatEntries(query: DescribeDnatEntriesRequest): Promise<DescribeDnatEntriesResponse>;
    /**
    * DescribeUisNetworkInterfaces
    */ DescribeUisNetworkInterfaces(query: DescribeUisNetworkInterfacesRequest): Promise<DescribeUisNetworkInterfacesResponse>;
    /**
    * DescribeAreas
    */ DescribeAreas(query: DescribeAreasRequest): Promise<DescribeAreasResponse>;
    /**
    * DeleteUisNodeIp
    */ DeleteUisNodeIp(query: DeleteUisNodeIpRequest): Promise<DeleteUisNodeIpResponse>;
    /**
    * CreateUisNetworkInterface
    */ CreateUisNetworkInterface(query: CreateUisNetworkInterfaceRequest): Promise<CreateUisNetworkInterfaceResponse>;
    /**
    * CreateDnatEntry
    */ CreateDnatEntry(query: CreateDnatEntryRequest): Promise<CreateDnatEntryResponse>;
    /**
    * 调用DescribeRegions接口查询可用地域。
    */ DescribeRegions(query: DescribeRegionsRequest): Promise<DescribeRegionsResponse>;
}
export default UIS;
