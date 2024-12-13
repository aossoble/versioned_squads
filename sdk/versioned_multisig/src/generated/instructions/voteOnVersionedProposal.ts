/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'

/**
 * @category Instructions
 * @category VoteOnVersionedProposal
 * @category generated
 */
export type VoteOnVersionedProposalInstructionArgs = {
  approve: boolean
}
/**
 * @category Instructions
 * @category VoteOnVersionedProposal
 * @category generated
 */
export const voteOnVersionedProposalStruct = new beet.BeetArgsStruct<
  VoteOnVersionedProposalInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['approve', beet.bool],
  ],
  'VoteOnVersionedProposalInstructionArgs'
)
/**
 * Accounts required by the _voteOnVersionedProposal_ instruction
 *
 * @property [] multisig
 * @property [_writable_] proposal
 * @property [_writable_, **signer**] voter
 * @category Instructions
 * @category VoteOnVersionedProposal
 * @category generated
 */
export type VoteOnVersionedProposalInstructionAccounts = {
  multisig: web3.PublicKey
  proposal: web3.PublicKey
  voter: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const voteOnVersionedProposalInstructionDiscriminator = [
  47, 208, 15, 78, 10, 114, 5, 46,
]

/**
 * Creates a _VoteOnVersionedProposal_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category VoteOnVersionedProposal
 * @category generated
 */
export function createVoteOnVersionedProposalInstruction(
  accounts: VoteOnVersionedProposalInstructionAccounts,
  args: VoteOnVersionedProposalInstructionArgs,
  programId = new web3.PublicKey('SQDS4ep65T869zMMBKyuUq6aD6EgTu8psMjkvj52pCf')
) {
  const [data] = voteOnVersionedProposalStruct.serialize({
    instructionDiscriminator: voteOnVersionedProposalInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.multisig,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.proposal,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.voter,
      isWritable: true,
      isSigner: true,
    },
  ]

  if (accounts.anchorRemainingAccounts != null) {
    for (const acc of accounts.anchorRemainingAccounts) {
      keys.push(acc)
    }
  }

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}
