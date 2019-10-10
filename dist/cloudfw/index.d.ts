import { AddAddressBookRequest } from "./AddAddressBook/req";
import { AddAddressBookResponse } from "./AddAddressBook/res";
import { DescribePolicyPriorUsedRequest } from "./DescribePolicyPriorUsed/req";
import { DescribePolicyPriorUsedResponse } from "./DescribePolicyPriorUsed/res";
import { ModifyControlPolicyPositionRequest } from "./ModifyControlPolicyPosition/req";
import { ModifyControlPolicyPositionResponse } from "./ModifyControlPolicyPosition/res";
import { DescribeControlPolicyRequest } from "./DescribeControlPolicy/req";
import { DescribeControlPolicyResponse } from "./DescribeControlPolicy/res";
import { AddControlPolicyRequest } from "./AddControlPolicy/req";
import { AddControlPolicyResponse } from "./AddControlPolicy/res";
import { DeleteControlPolicyRequest } from "./DeleteControlPolicy/req";
import { DeleteControlPolicyResponse } from "./DeleteControlPolicy/res";
import { ModifyControlPolicyRequest } from "./ModifyControlPolicy/req";
import { ModifyControlPolicyResponse } from "./ModifyControlPolicy/res";
import { DeleteAddressBookRequest } from "./DeleteAddressBook/req";
import { DeleteAddressBookResponse } from "./DeleteAddressBook/res";
import { ModifyAddressBookRequest } from "./ModifyAddressBook/req";
import { ModifyAddressBookResponse } from "./ModifyAddressBook/res";
import { DescribeAddressBookRequest } from "./DescribeAddressBook/req";
import { DescribeAddressBookResponse } from "./DescribeAddressBook/res";

interface CLOUDFW {
    /**
    * 调用AddAddressBook接口添加访问控制地址簿。
    */ AddAddressBook(query: AddAddressBookRequest): Promise<AddAddressBookResponse>;
    /**
    * 调用DescribePolicyPriorUsed接口查询访问控制策略优先级使用范围。
    */ DescribePolicyPriorUsed(query: DescribePolicyPriorUsedRequest): Promise<DescribePolicyPriorUsedResponse>;
    /**
    * 调用ModifyControlPolicyPosition接口修改访问控制策略的优先级。
    */ ModifyControlPolicyPosition(query: ModifyControlPolicyPositionRequest): Promise<ModifyControlPolicyPositionResponse>;
    /**
    * 调用DescribeControlPolicy接口获取访问控制策略列表。
    */ DescribeControlPolicy(query: DescribeControlPolicyRequest): Promise<DescribeControlPolicyResponse>;
    /**
    * 调用AddControlPolicy接口添加访问控制策略。
    */ AddControlPolicy(query: AddControlPolicyRequest): Promise<AddControlPolicyResponse>;
    /**
    * 调用DeleteControlPolicy接口删除访问控制策略。
    */ DeleteControlPolicy(query: DeleteControlPolicyRequest): Promise<DeleteControlPolicyResponse>;
    /**
    * 调用ModifyControlPolicy接口修改访问控制策略。
    */ ModifyControlPolicy(query: ModifyControlPolicyRequest): Promise<ModifyControlPolicyResponse>;
    /**
    * 调用DeleteAddressBook接口删除访问控制地址簿。
    */ DeleteAddressBook(query: DeleteAddressBookRequest): Promise<DeleteAddressBookResponse>;
    /**
    * 调用ModifyAddressBook接口修改访问控制的地址簿。
    */ ModifyAddressBook(query: ModifyAddressBookRequest): Promise<ModifyAddressBookResponse>;
    /**
    * 调用DescribeAddressBook接口查询访问控制地址簿的详细信息。
    */ DescribeAddressBook(query: DescribeAddressBookRequest): Promise<DescribeAddressBookResponse>;
}
export default CLOUDFW;
