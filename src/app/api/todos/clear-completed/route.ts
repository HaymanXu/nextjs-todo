import { NextResponse } from 'next/server';
import { PrismaClient } from '../../../../generated/prisma';

const prisma = new PrismaClient();

// DELETE /api/todos/clear-completed - 删除所有已完成的todos
export async function DELETE() {
  try {
    const result = await prisma.todo.deleteMany({
      where: {
        completed: true
      }
    });

    return NextResponse.json({
      success: true,
      deletedCount: result.count
    });
  } catch (error) {
    console.error('Error clearing completed todos:', error);
    return NextResponse.json(
      { error: 'Failed to clear completed todos' },
      { status: 500 }
    );
  }
} 