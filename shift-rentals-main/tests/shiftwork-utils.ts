import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Approval,
  ApprovalForAll,
  ContractURIUpdated,
  NewRental,
  OwnershipTransferred,
  Transfer,
  UpdateUser
} from "../generated/SHIFTWORK/SHIFTWORK"

export function createApprovalEvent(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return approvalEvent
}

export function createApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createContractURIUpdatedEvent(
  prevURI: string,
  newURI: string
): ContractURIUpdated {
  let contractUriUpdatedEvent = changetype<ContractURIUpdated>(newMockEvent())

  contractUriUpdatedEvent.parameters = new Array()

  contractUriUpdatedEvent.parameters.push(
    new ethereum.EventParam("prevURI", ethereum.Value.fromString(prevURI))
  )
  contractUriUpdatedEvent.parameters.push(
    new ethereum.EventParam("newURI", ethereum.Value.fromString(newURI))
  )

  return contractUriUpdatedEvent
}

export function createNewRentalEvent(
  tokenId: BigInt,
  proofTokenId: BigInt,
  user: Address,
  expires: BigInt,
  collectionName: string,
  employerName: string,
  worker: Address,
  earnedTokens: BigInt
): NewRental {
  let newRentalEvent = changetype<NewRental>(newMockEvent())

  newRentalEvent.parameters = new Array()

  newRentalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  newRentalEvent.parameters.push(
    new ethereum.EventParam(
      "proofTokenId",
      ethereum.Value.fromUnsignedBigInt(proofTokenId)
    )
  )
  newRentalEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  newRentalEvent.parameters.push(
    new ethereum.EventParam(
      "expires",
      ethereum.Value.fromUnsignedBigInt(expires)
    )
  )
  newRentalEvent.parameters.push(
    new ethereum.EventParam(
      "collectionName",
      ethereum.Value.fromString(collectionName)
    )
  )
  newRentalEvent.parameters.push(
    new ethereum.EventParam(
      "employerName",
      ethereum.Value.fromString(employerName)
    )
  )
  newRentalEvent.parameters.push(
    new ethereum.EventParam("worker", ethereum.Value.fromAddress(worker))
  )
  newRentalEvent.parameters.push(
    new ethereum.EventParam(
      "earnedTokens",
      ethereum.Value.fromUnsignedBigInt(earnedTokens)
    )
  )

  return newRentalEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  tokenId: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return transferEvent
}

export function createUpdateUserEvent(
  tokenId: BigInt,
  user: Address,
  expires: BigInt
): UpdateUser {
  let updateUserEvent = changetype<UpdateUser>(newMockEvent())

  updateUserEvent.parameters = new Array()

  updateUserEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  updateUserEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  updateUserEvent.parameters.push(
    new ethereum.EventParam(
      "expires",
      ethereum.Value.fromUnsignedBigInt(expires)
    )
  )

  return updateUserEvent
}
